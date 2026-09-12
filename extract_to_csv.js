const fs = require('fs');
const path = require('path');
const { scanDataDir } = require('./update_index');

const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const outputPath = path.join(dataDir, 'sejarah_tingkatan_1.csv');

// Check if app.js has raw chapters (legacy format)
const appJsPath = path.join(__dirname, 'app.js');
const content = fs.readFileSync(appJsPath, 'utf8');
const match = content.match(/const chapters = (\[[\s\S]*?\]);\s*const chapterSelect/);

if (match) {
  const chapters = eval(match[1]);

  function escapeCsv(val) {
    if (val === null || val === undefined) return '';
    const str = String(val);
    if (str.includes('"') || str.includes(',') || str.includes('\n') || str.includes('\r')) {
      return '"' + str.replace(/"/g, '""') + '"';
    }
    return str;
  }

  const headers = [
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

  const rows = [headers.map(escapeCsv).join(',')];

  chapters.forEach((c) => {
    c.topics.forEach((t) => {
      // 1. Summary
      if (t.summary || t.summary_en) {
        rows.push(
          [
            c.id,
            c.name,
            t.id,
            t.name,
            'summary',
            t.summary || '',
            t.summary_en || '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
          ]
            .map(escapeCsv)
            .join(',')
        );
      }

      // 2. Facts
      if (t.facts) {
        t.facts.forEach((fact, i) => {
          const factEn = t.facts_en && t.facts_en[i] ? t.facts_en[i] : '';
          rows.push(
            [
              c.id,
              c.name,
              t.id,
              t.name,
              'fact',
              fact,
              factEn,
              '',
              '',
              '',
              '',
              '',
              '',
              ''
            ]
              .map(escapeCsv)
              .join(',')
          );
        });
      }

      // 3. Persons
      if (t.persons) {
        t.persons.forEach((p) => {
          rows.push(
            [
              c.id,
              c.name,
              t.id,
              t.name,
              'person',
              p.description || '',
              p.description_en || '',
              '',
              '',
              '',
              '',
              '',
              p.name || '',
              p.role || ''
            ]
              .map(escapeCsv)
              .join(',')
          );
        });
      }

      // 4. Quiz items
      if (t.quiz) {
        t.quiz.forEach((q) => {
          const choices = q.choices || [];
          rows.push(
            [
              c.id,
              c.name,
              t.id,
              t.name,
              q.type || 'multiple_choice',
              q.question || '',
              '',
              choices[0] || '',
              choices[1] || '',
              choices[2] || '',
              choices[3] || '',
              q.answer || '',
              '',
              ''
            ]
              .map(escapeCsv)
              .join(',')
          );
        });
      }
    });
  });

  fs.writeFileSync(outputPath, rows.join('\r\n'), 'utf8');
  console.log(`Successfully extracted ${rows.length} rows to ${outputPath}`);
} else {
  console.log(`File ${outputPath} already exists and app.js is already modernized.`);
}

// Update index.json
scanDataDir();
