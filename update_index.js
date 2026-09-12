const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

function formatLabel(str) {
  return str
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
}

function scanDataDir() {
  const files = fs.readdirSync(dataDir);
  const datasets = [];

  files.forEach((file) => {
    if (!file.endsWith('.csv')) return;
    if (file.toLowerCase().startsWith('template')) return;

    // Pattern: [subject]_[tingkatan][_variant].csv, e.g. matematik_tingkatan_1_bilingual.csv
    const match = file.match(/^(.*)_(tingkatan_\d+)(?:_.*)?\.csv$/i);
    if (match) {
      const subjectId = match[1].toLowerCase();
      const tingkatanId = match[2].toLowerCase();
      datasets.push({
        file: `data/${file}`,
        fileName: file,
        subjectId: subjectId,
        subjectName: formatLabel(subjectId),
        tingkatanId: tingkatanId,
        tingkatanName: formatLabel(tingkatanId)
      });
    } else {
      const nameWithoutExt = file.replace(/\.csv$/i, '');
      datasets.push({
        file: `data/${file}`,
        fileName: file,
        subjectId: nameWithoutExt.toLowerCase(),
        subjectName: formatLabel(nameWithoutExt),
        tingkatanId: 'umum',
        tingkatanName: 'Umum'
      });
    }
  });

  // Sort by tingkatan then subject
  datasets.sort((a, b) => {
    if (a.tingkatanId !== b.tingkatanId) {
      return a.tingkatanId.localeCompare(b.tingkatanId);
    }
    return a.subjectName.localeCompare(b.subjectName);
  });

  const indexPath = path.join(dataDir, 'index.json');
  fs.writeFileSync(indexPath, JSON.stringify(datasets, null, 2), 'utf8');
  console.log(`Generated ${indexPath} with ${datasets.length} dataset(s):`);
  datasets.forEach((d) => console.log(` - ${d.subjectName} (${d.tingkatanName}) -> ${d.file}`));
  return datasets;
}

if (require.main === module) {
  scanDataDir();
}

module.exports = { scanDataDir };

