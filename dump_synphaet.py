from pathlib import Path
text = Path('src/data/hospitaldata.jsx/synphaet/synphaet.jsx').read_text(encoding='utf-8')
for i,line in enumerate(text.splitlines(),1):
    if i>20: break
    print(i, line.encode('unicode_escape').decode())
