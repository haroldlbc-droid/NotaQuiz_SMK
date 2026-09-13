const fs = require('fs');
const http = require('http');
const os = require('os');
const path = require('path');
const { deleteSubject, importCsv } = require('./import_csv');

const projectRoot = path.resolve(__dirname, '..');
const adminPage = path.join(__dirname, 'admin.html');
const port = Number(process.env.PORT) || 3000;
const maxBodySize = 12 * 1024 * 1024;
const staticFiles = {
  '/index.html': ['index.html', 'text/html; charset=utf-8'],
  '/app.js': ['app.js', 'application/javascript; charset=utf-8'],
  '/styles.css': ['styles.css', 'text/css; charset=utf-8'],
  '/data/index.json': ['data/index.json', 'application/json; charset=utf-8'],
  '/data/matematik_tingkatan_1_bilingual.csv': ['data/matematik_tingkatan_1_bilingual.csv', 'text/csv; charset=utf-8'],
  '/data/sains_tingkatan_1.csv': ['data/sains_tingkatan_1.csv', 'text/csv; charset=utf-8'],
  '/data/sejarah_tingkatan_1.csv': ['data/sejarah_tingkatan_1.csv', 'text/csv; charset=utf-8']
};

function getDataCsvPath(requestUrl) {
  const requestedPath = new URL(requestUrl, 'http://127.0.0.1').pathname;
  const match = requestedPath.match(/^\/data\/([a-z0-9][a-z0-9_-]*\.csv)$/i);
  if (!match) return null;

  const filePath = path.join(projectRoot, 'data', match[1]);
  return fs.existsSync(filePath) ? filePath : null;
}

function sendJson(response, statusCode, body) {
  response.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  response.end(JSON.stringify(body));
}

function readDatasets() {
  const indexPath = path.join(projectRoot, 'data', 'index.json');
  return JSON.parse(fs.readFileSync(indexPath, 'utf8'));
}

function readJson(request) {
  return new Promise((resolve, reject) => {
    let body = '';

    request.setEncoding('utf8');
    request.on('data', (chunk) => {
      body += chunk;
      if (body.length > maxBodySize) {
        reject(new Error('Fail CSV terlalu besar. Had maksimum ialah 12 MB.'));
        request.destroy();
      }
    });
    request.on('end', () => {
      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error('Permintaan import tidak sah.'));
      }
    });
    request.on('error', reject);
  });
}

async function handleImport(request, response) {
  let temporaryDirectory;
  try {
    const payload = await readJson(request);
    if (!payload || typeof payload.csv !== 'string' || !payload.csv.trim()) {
      throw new Error('Kandungan CSV diperlukan.');
    }

    const targetName = typeof payload.targetName === 'string' && payload.targetName.trim()
      ? payload.targetName.trim()
      : 'imported.csv';
    temporaryDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'sejarah-csv-'));
    const temporaryPath = path.join(temporaryDirectory, 'upload.csv');
    fs.writeFileSync(temporaryPath, payload.csv.replace(/^\uFEFF/, ''), 'utf8');
    const result = importCsv(temporaryPath, targetName);

    sendJson(response, 200, { ok: true, result });
  } catch (error) {
    sendJson(response, 400, { ok: false, error: error.message });
  } finally {
    if (temporaryDirectory) {
      fs.rmSync(temporaryDirectory, { recursive: true, force: true });
    }
  }
}

async function handleDeleteSubject(request, response) {
  try {
    const payload = await readJson(request);
    const result = deleteSubject(payload && payload.subjectId, payload && payload.tingkatanId);
    sendJson(response, 200, { ok: true, result });
  } catch (error) {
    sendJson(response, 400, { ok: false, error: error.message });
  }
}

const server = http.createServer((request, response) => {
  if (request.method === 'GET' && (request.url === '/' || request.url === '/admin.html')) {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    fs.createReadStream(adminPage).pipe(response);
    return;
  }

  const staticFile = staticFiles[request.url];
  if (request.method === 'GET' && staticFile) {
    response.writeHead(200, { 'Content-Type': staticFile[1] });
    fs.createReadStream(path.join(projectRoot, staticFile[0])).pipe(response);
    return;
  }

  const dataCsvPath = getDataCsvPath(request.url);
  if (request.method === 'GET' && dataCsvPath) {
    response.writeHead(200, { 'Content-Type': 'text/csv; charset=utf-8' });
    fs.createReadStream(dataCsvPath).pipe(response);
    return;
  }

  if (request.method === 'POST' && request.url === '/api/import') {
    handleImport(request, response);
    return;
  }

  if (request.method === 'GET' && request.url === '/api/datasets') {
    try {
      sendJson(response, 200, { ok: true, datasets: readDatasets() });
    } catch (error) {
      sendJson(response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === 'POST' && request.url === '/api/delete-subject') {
    handleDeleteSubject(request, response);
    return;
  }

  sendJson(response, 404, { ok: false, error: 'Laluan tidak dijumpai.' });
});

server.listen(port, '127.0.0.1', () => {
  console.log(`CSV admin tersedia di http://127.0.0.1:${port}`);
  console.log(`Project root: ${projectRoot}`);
});