import importlib.util
pkgs = ["pypdf", "PyPDF2", "pdfplumber", "fitz"]
for pkg in pkgs:
    print(f"{pkg}: {importlib.util.find_spec(pkg) is not None}")
