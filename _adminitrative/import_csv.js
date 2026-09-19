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

function getDatasetIdentity(fileName) {
  const match = fileName.match(/^(.*)_(tingkatan_\d+)(?:_.*)?\.csv$/i);
  if (!match) return null;
  return { subjectId: match[1].toLowerCase(), tingkatanId: match[2].toLowerCase() };
}

function formatLabel(value) {
  return value
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function updateDefaultDataset(targetName, removeOnly = false) {
  const identity = getDatasetIdentity(targetName);
  if (!identity) return false;

  const appSource = fs.readFileSync(appPath, 'utf8');
  const listStart = appSource.indexOf('const DEFAULT_DATASETS = [');
  const listEnd = appSource.indexOf('];', listStart);
  if (listStart === -1 || listEnd === -1) return false;

  const listSource = appSource.slice(listStart, listEnd);
  const identitySubject = `subjectId: ${JSON.stringify(identity.subjectId)},`;
  const identityTingkatan = `tingkatanId: ${JSON.stringify(identity.tingkatanId)},`;
  const cleanedList = listSource.replace(/\r?\n  \{[\s\S]*?\r?\n  \},?/g, (entry) => (
    entry.includes(identitySubject) && entry.includes(identityTingkatan) ? '' : entry
  )).trimEnd();

  const listTrimmed = cleanedList.trimEnd();
  const separator = listTrimmed.endsWith('[') || listTrimmed.endsWith(',') ? '' : ',';
  const entry = removeOnly ? '' : `${separator}\n  {
    file: ${JSON.stringify(`data/${targetName}`)},
    fileName: ${JSON.stringify(targetName)},
    subjectId: ${JSON.stringify(identity.subjectId)},
    subjectName: ${JSON.stringify(formatLabel(identity.subjectId))},
    tingkatanId: ${JSON.stringify(identity.tingkatanId)},
    tingkatanName: ${JSON.stringify(formatLabel(identity.tingkatanId))}
  }`;
  const updatedSource = `${appSource.slice(0, listStart)}${cleanedList}${entry}\n${appSource.slice(listEnd)}`;
  fs.writeFileSync(appPath, updatedSource, 'utf8');
  return true;
}

function removeExistingDatasetVariants(targetName) {
  const identity = getDatasetIdentity(targetName);
  if (!identity) return [];

  const removedFiles = fs.readdirSync(dataDir).filter((fileName) => {
    if (!fileName.toLowerCase().endsWith('.csv')) return false;
    const fileIdentity = getDatasetIdentity(fileName);
    return fileIdentity
      && fileIdentity.subjectId === identity.subjectId
      && fileIdentity.tingkatanId === identity.tingkatanId
      && fileName !== targetName;
  });

  removedFiles.forEach((fileName) => {
    fs.unlinkSync(path.join(dataDir, fileName));
    removeEmbeddedFallback(fileName);
    updateDefaultDataset(fileName, true);
  });
  return removedFiles;
}

function replaceFileAtomically(sourcePath, targetPath) {
  const stagingPath = `${targetPath}.upload-${process.pid}-${Date.now()}`;
  const backupPath = `${targetPath}.backup-${process.pid}-${Date.now()}`;
  let movedExistingFile = false;

  try {
    fs.copyFileSync(sourcePath, stagingPath);
    if (fs.existsSync(targetPath)) {
      fs.renameSync(targetPath, backupPath);
      movedExistingFile = true;
    }
    fs.renameSync(stagingPath, targetPath);
    if (movedExistingFile) fs.rmSync(backupPath, { force: true });
  } catch (error) {
    fs.rmSync(stagingPath, { force: true });
    if (movedExistingFile && !fs.existsSync(targetPath)) {
      fs.renameSync(backupPath, targetPath);
    }
    throw error;
  }
}

function deleteSubject(subjectId, tingkatanId) {
  const normalizedSubjectId = String(subjectId || '').toLowerCase();
  const normalizedTingkatanId = String(tingkatanId || '').toLowerCase();
  if (!/^[a-z0-9][a-z0-9_-]*$/.test(normalizedSubjectId)
    || !/^tingkatan_\d+$/.test(normalizedTingkatanId)) {
    throw new Error('Subjek dan Tingkatan tidak sah.');
  }

  const removedFiles = fs.readdirSync(dataDir).filter((fileName) => {
    if (!fileName.toLowerCase().endsWith('.csv')) return false;
    const identity = getDatasetIdentity(fileName);
    return identity
      && identity.subjectId === normalizedSubjectId
      && identity.tingkatanId === normalizedTingkatanId;
  });
  removedFiles.forEach((fileName) => {
    fs.unlinkSync(path.join(dataDir, fileName));
    removeEmbeddedFallback(fileName);
    updateDefaultDataset(fileName, true);
  });
  const datasets = scanDataDir();
  return { removedFiles, datasetCount: datasets.length };
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

function removeEmbeddedFallback(targetName) {
  const fallbackKey = `data/${targetName}`;
  const appSource = fs.readFileSync(appPath, 'utf8');
  const fallbackStart = appSource.indexOf('const EMBEDDED_FALLBACKS = {');
  const fallbackComment = appSource.indexOf('\n// Sandaran senarai dataset', fallbackStart);
  const fallbackEnd = appSource.lastIndexOf('};', fallbackComment);
  if (fallbackStart === -1 || fallbackEnd === -1) return false;

  const fallbackSource = appSource.slice(fallbackStart, fallbackEnd);
  const propertyStart = fallbackSource.indexOf(`  ${JSON.stringify(fallbackKey)}:`);
  if (propertyStart === -1) return false;

  const range = findEmbeddedStringRange(fallbackSource, fallbackKey);
  if (!range) return false;

  let entryStart = propertyStart;
  let entryEnd = fallbackStart + range.end;
  while (appSource[entryEnd] === '\r' || appSource[entryEnd] === '\n') entryEnd += 1;
  if (appSource[entryEnd] === ',') {
    entryEnd += 1;
  } else {
    const precedingComma = fallbackSource.lastIndexOf(',', propertyStart);
    if (precedingComma !== -1) entryStart = precedingComma;
  }
  while (appSource[entryEnd] === '\r' || appSource[entryEnd] === '\n') entryEnd += 1;

  const absoluteStart = fallbackStart + entryStart;
  const updatedSource = `${appSource.slice(0, absoluteStart)}${appSource.slice(entryEnd)}`;
  fs.writeFileSync(appPath, updatedSource, 'utf8');
  return true;
}

function updateEmbeddedFallback(targetName, csvText) {
  const fallbackKey = `data/${targetName}`;
  const appSource = fs.readFileSync(appPath, 'utf8');
  const fallbackStart = appSource.indexOf('const EMBEDDED_FALLBACKS = {');
  const fallbackComment = appSource.indexOf('\n// Sandaran senarai dataset', fallbackStart);
  const fallbackEnd = appSource.lastIndexOf('};', fallbackComment);
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
  replaceFileAtomically(sourcePath, targetPath);
  const replacedFiles = removeExistingDatasetVariants(targetName);

  const datasets = scanDataDir();
  const fallbackUpdated = updateEmbeddedFallback(targetName, csvText);
  const defaultDatasetUpdated = updateDefaultDataset(targetName);

  console.log(`Imported ${summary.rowCount} row(s) and ${summary.columnCount} column(s) to ${path.relative(projectRoot, targetPath)}.`);
  if (replacedFiles.length > 0) {
    console.log(`Replaced existing dataset file(s): ${replacedFiles.join(', ')}.`);
  }
  console.log(`Updated data/index.json with ${datasets.length} dataset(s).`);
  if (fallbackUpdated) {
    console.log(`Updated embedded fallback in app.js for ${targetName}.`);
  } else {
    console.log(`No embedded fallback entry exists for ${targetName}; index.json remains the runtime source.`);
  }
  if (defaultDatasetUpdated) {
    console.log(`Updated DEFAULT_DATASETS in app.js for ${targetName}.`);
  }

  return {
    targetName,
    rowCount: summary.rowCount,
    columnCount: summary.columnCount,
    datasetCount: datasets.length,
    replacedFiles,
    fallbackUpdated,
    defaultDatasetUpdated
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

module.exports = { deleteSubject, getDatasetIdentity, importCsv, parseCsv, removeEmbeddedFallback, updateDefaultDataset, validateCsv };
