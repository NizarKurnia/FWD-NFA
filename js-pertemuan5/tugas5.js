// Array awal produk
let produkList = [
    { id: 1, nama: "Laptop", harga: 7500000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Headphone", harga: 1500000 },
    { id: 4, nama: "Monitor", harga: 2000000 },
    { id: 5, nama: "Keyboard", harga: 800000 }
];
// nama fungsi bebas
const daftarProduk = {

    // menambah produk dengan Spread Operator
    tambahProduk(id, nama, harga) {
        const produkBaru = { id, nama, harga };
        produkList = [...produkList, produkBaru]
        console.log(`\n Dapet kiriman ${nama} dari atasan \n`);
    },

    // menghapus produk berdasarkan id dengan rest operator 
    hapusProduk(...id) {
        produkList = produkList.filter(produk => !id.includes(produk.id));
        console.log(`\n Produk dengan id ${id} udah laku \n`)
    },

    // menampilkan produk dengan destructuring
    tampilkanProduk() {
        console.log("Daftar Produk")
        produkList.forEach(({ id, nama, harga }) => {
            console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga}`);
        });
    }
};


daftarProduk.tampilkanProduk();
daftarProduk.tambahProduk(6, "Mouse", 200000);
daftarProduk.tampilkanProduk(); 
daftarProduk.hapusProduk(1, 4); 
daftarProduk.tampilkanProduk(); 