const fs = require('fs');
const path = require('path');
const { scanDataDir } = require('../update_index');

const projectRoot = path.resolve(__dirname, '..');
const dataDir = path.join(projectRoot, 'data');
const appPath = path.join(projectRoot, 'app.js');
const requiredHeaders = [
  'chapter_id',
  'chapter',
  'topic_id',
  'topic',
  'type',
  'text',
  'text_en',
  'choice_a',
  'choice_b',
  'choice_c',
  'choice_d',
  'answer',
  'person_name',
  'person_role'
];

function parseCsv(text) {
  const rows = [];
  let row = [''];
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const character = text[i];
    const nextCharacter = text[i + 1];

    if (inQuotes) {
      if (character === '"' && nextCharacter === '"') {
        row[row.length - 1] += '"';
        i += 1;
      } else if (character === '"') {
        inQuotes = false;
      } else {
        row[row.length - 1] += character;
      }
    } else if (character === '"') {
      if (row[row.length - 1] !== '') {
        throw new Error(`Invalid CSV: quote found inside an unquoted field near character ${i}.`);
      }
      inQuotes = true;
    } else if (character === ',') {
      row.push('');
    } else if (character === '\r' && nextCharacter === '\n') {
      rows.push(row);
      row = [''];
      i += 1;
    } else if (character === '\n' || character === '\r') {
      rows.push(row);
      row = [''];
    } else {
      row[row.length - 1] += character;
    }
  }

  if (inQuotes) {
    throw new Error('Invalid CSV: an opening quote has no closing quote.');
  }
  if (row.length > 1 || row[0] !== '') {
    rows.push(row);
  }

  return rows;
}

function validateCsv(csvText, sourcePath) {
  const rows = parseCsv(csvText);
  if (rows.length < 2) {
    throw new Error(`CSV must contain a header and at least one data row: ${sourcePath}`);
  }

  const headers = rows[0].map((header) => header.trim().toLowerCase());
  const missingHeaders = requiredHeaders.filter((header) => !headers.includes(header));
  if (missingHeaders.length > 0) {
    throw new Error(`CSV is missing required columns: ${missingHeaders.join(', ')}`);
  }

  const expectedColumnCount = headers.length;
  const malformedRows = rows.slice(1).filter((row) => row.length !== expectedColumnCount);
  if (malformedRows.length > 0) {
    throw new Error(`CSV contains ${malformedRows.length} row(s) with a different number of columns than the header.`);
  }

  const contentRows = rows.slice(1).filter((row) => row.some((value) => value.trim() !== ''));
  const missingIdentityRows = contentRows.filter((row) => {
    const chapter = row[headers.indexOf('chapter')];
    const topic = row[headers.indexOf('topic')];
    const type = row[headers.indexOf('type')];
    const text = row[headers.indexOf('text')];
    return !chapter || !topic || !type || !text;
  });
  if (missingIdentityRows.length > 0) {
    throw new Error(`CSV contains ${missingIdentityRows.length} row(s) missing chapter, topic, type, or text.`);
  }

  return { rowCount: contentRows.length, columnCount: headers.length };
}

function findEmbeddedStringRange(source, key) {
  const propertyStart = source.indexOf(`"${key}"`);
  if (propertyStart === -1) return null;

  const valueStart = source.indexOf('"', source.indexOf(':', propertyStart) + 1);
  if (valueStart === -1) return null;

  for (let i = valueStart + 1; i < source.length; i += 1) {
    if (source[i] !== '"' || source[i - 1] === '\\') continue;

    let precedingSlashes = 0;
    for (let j = i - 1; j > valueStart && source[j] === '\\'; j -= 1) {
      precedingSlashes += 1;
    }
    if (precedingSlashes % 2 === 0) {
      return { start: valueStart, end: i + 1 };
    }
  }

  return null;
}

function updateEmbeddedFallback(targetName, csvText) {
  const fallbackKey = `data/${targetName}`;
  const appSource = fs.readFileSync(appPath, 'utf8');
  const fallbackStart = appSource.indexOf('const EMBEDDED_FALLBACKS = {');
  const fallbackEndMarker = '\n};\n\n// Sandaran senarai dataset';
  const fallbackEnd = appSource.indexOf(fallbackEndMarker, fallbackStart);
  if (fallbackStart === -1 || fallbackEnd === -1) {
    return false;
  }

  const fallbackSource = appSource.slice(fallbackStart, fallbackEnd);
  const range = findEmbeddedStringRange(fallbackSource, fallbackKey);
  if (range) {
    const start = fallbackStart + range.start;
    const end = fallbackStart + range.end;
    const updatedSource = `${appSource.slice(0, start)}${JSON.stringify(csvText)}${appSource.slice(end)}`;
    fs.writeFileSync(appPath, updatedSource, 'utf8');
    return true;
  }

  const separator = fallbackSource.trimEnd().endsWith('{') ? '' : ',';
  const fallbackEntry = `${separator}\n  ${JSON.stringify(fallbackKey)}: ${JSON.stringify(csvText)}`;
  const updatedSource = `${appSource.slice(0, fallbackEnd)}${fallbackEntry}${appSource.slice(fallbackEnd)}`;
  fs.writeFileSync(appPath, updatedSource, 'utf8');
  return true;
}

function importCsv(sourceFile, targetFile) {
  const sourcePath = path.resolve(process.cwd(), sourceFile);
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Source CSV not found: ${sourcePath}`);
  }

  const targetName = targetFile || path.basename(sourcePath);
  if (!/^[a-z0-9][a-z0-9_-]*\.csv$/i.test(targetName)) {
    throw new Error('Target filename must be a simple .csv filename using letters, numbers, hyphens, or underscores.');
  }

  const csvText = fs.readFileSync(sourcePath, 'utf8').replace(/^\uFEFF/, '');
  const summary = validateCsv(csvText, sourcePath);
  fs.mkdirSync(dataDir, { recursive: true });
  const targetPath = path.join(dataDir, targetName);
  fs.copyFileSync(sourcePath, targetPath);

  const datasets = scanDataDir();
  const fallbackUpdated = updateEmbeddedFallback(targetName, csvText);

  console.log(`Imported ${summary.rowCount} row(s) and ${summary.columnCount} column(s) to ${path.relative(projectRoot, targetPath)}.`);
  console.log(`Updated data/index.json with ${datasets.length} dataset(s).`);
  if (fallbackUpdated) {
    console.log(`Updated embedded fallback in app.js for ${targetName}.`);
  } else {
    console.log(`No embedded fallback entry exists for ${targetName}; index.json remains the runtime source.`);
  }

  return {
    targetName,
    rowCount: summary.rowCount,
    columnCount: summary.columnCount,
    datasetCount: datasets.length,
    fallbackUpdated
  };
}

if (require.main === module) {
  const [sourceFile, targetFile] = process.argv.slice(2);
  if (!sourceFile || process.argv.includes('--help') || process.argv.includes('-h')) {
    console.log('Usage: node _adminitrative/import_csv.js <source.csv> [target.csv]');
    process.exit(sourceFile ? 0 : 1);
  }

  try {
    importCsv(sourceFile, targetFile);
  } catch (error) {
    console.error(`Import failed: ${error.message}`);
    process.exit(1);
  }
}

module.exports = { importCsv, parseCsv, validateCsv };
