import binascii
path = r"src/data/hospitaldata.jsx/phyathai/phyathai.jsx"
with open(path, "rb") as f:
    data = f.read(400)
print(binascii.hexlify(data))
