let produkToko = [
    { id: 1, Nama: "Laptop", Harga: 7000000, Stok: 5 },
    { id: 2, Nama: "Mouse", Harga: 200000, Stok: 10 },
    { id: 3, Nama: "Keyboard", Harga: 350000, Stok: 7 }
]

function tambahProduk(Nama, Harga, Stok) {
    let id = produkToko.length + 1;

    let item = {
        id: id,
        Nama: Nama,
        Harga: Harga,
        Stok: Stok
    };

    produkToko.push(item);

    console.log(`Produk ${Nama} berhasil ditambahkan`);
}

function hapusProduk(id) {
    produkToko = produkToko.filter(produk => produk.id !== id);
    console.log(`Produk dengan ID ${id} berhasil dihapus`);
}

function tampilkanProduk() {
    console.table(produkToko);
}

tambahProduk("Monitor", 1500000, 3);
hapusProduk(1);
tampilkanProduk();