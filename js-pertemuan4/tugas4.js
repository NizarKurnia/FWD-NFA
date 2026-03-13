class Pelanggan {
    constructor(nama, nomorTelepon, kendaraanDisewa) {
        this.nama = nama
        this.nomorTelepon = nomorTelepon
        this.kendaraanDisewa = kendaraanDisewa
    }

    info() {
        console.log(`Nama: ${this.nama}`)
        console.log(`Nomor Telepon: ${this.nomorTelepon}`)
        console.log(`Kendaraan Disewa: ${this.kendaraanDisewa}`)
    }

    sewa(harga) {
        let transaksi = new Transaksi(this.kendaraanDisewa, harga)
        transaksi.tampil()
    }
}

class Transaksi {
    constructor(kendaraan, harga) {
        this.kendaraan = kendaraan
        this.harga = harga
    }

    tampil() {
        console.log(`Menyewa ${this.kendaraan} dengan Harga: ${this.harga}`)
    }
}

let pelanggan1 = new Pelanggan("Agus", "087578678657", "Mobil")

pelanggan1.info()
pelanggan1.sewa(500000)
