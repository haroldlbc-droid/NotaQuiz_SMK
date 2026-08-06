from pathlib import Path
from pypdf import PdfReader

path = Path(r'C:\Users\harold\Documents\Sejarah_Tingkatan_1\Bab8.pdf')
reader = PdfReader(path)
print('pages', len(reader.pages))
for i, page in enumerate(reader.pages, start=1):
    text = page.extract_text() or '(no text)'
    print(f'--- page {i} ---')
    print(text)
