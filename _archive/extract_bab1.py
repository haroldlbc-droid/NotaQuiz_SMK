from pathlib import Path
from pypdf import PdfReader

path = Path(r'C:\Users\harold\Documents\Codex\Bab1.pdf')
print('exists', path.exists())
reader = PdfReader(path)
print('pages', len(reader.pages))
for i, page in enumerate(reader.pages[:5], start=1):
    text = page.extract_text()
    print('--- page', i, '---')
    if text is None:
        print('(no text extracted)')
    else:
        print(text[:2000])
