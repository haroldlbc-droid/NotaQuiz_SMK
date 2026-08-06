from pathlib import Path
p = Path('Bab8_full_text.txt')
data = p.read_bytes()
print('len', len(data))
print(data[:40])
for enc in ['utf-16', 'utf-8', 'latin-1']:
    try:
        s = data.decode(enc)
        print('decoded', enc)
        print(s[:400])
        break
    except Exception as e:
        print('fail', enc, e)
