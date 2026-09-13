from pathlib import Path
from PyPDF2 import PdfReader

path = Path('Bab1.pdf')
reader = PdfReader(path)
print('pages', len(reader.pages))
for i, page in enumerate(reader.pages[:5], start=1):
    print('--- PAGE', i, '---')
    text = page.extract_text() or ''
    print(text[:2000])
