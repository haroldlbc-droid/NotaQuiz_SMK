from pathlib import Path
from pypdf import PdfReader

root = Path(r'C:/Users/harold/Documents/Codex')
for i in range(1, 9):
    pdf_path = root / f'Bab{i}.pdf'
    if not pdf_path.exists():
        print(f'MISSING {pdf_path}')
        continue
    reader = PdfReader(pdf_path)
    print(f'=== Bab{i}.pdf ({len(reader.pages)} pages) ===')
    for j, page in enumerate(reader.pages[:3], start=1):
        text = page.extract_text()
        print(f'-- page {j} --')
        if text:
            lines = [line.strip() for line in text.splitlines() if line.strip()]
            for line in lines[:20]:
                print(line)
        else:
            print('(no text)')
    print()
