from pathlib import Path
from pypdf import PdfReader

p = Path(r'C:\Users\harold\Documents\Sejarah_Tingkatan_1\Bab2.pdf')
reader = PdfReader(str(p))
print('pages', len(reader.pages))
for i, page in enumerate(reader.pages[:6], start=1):
    text = page.extract_text() or '(no text)'
    print(f'--- page {i} ---')
    print(text[:4000])
    print()
