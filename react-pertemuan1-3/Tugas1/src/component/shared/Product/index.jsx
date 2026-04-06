import React, { useRef, useState } from 'react'
import booksData from "../../../utils/books"


function Product() {
    const [bookList, setBookList] = useState([...booksData])

    const handleClick = () => {
        const newBooks = {
            id: bookList.length + 1,
            title: "Buku Harian",
            author: "Punya Orang",
            year: 2100,
            description: "Kehidupan Orang Yang Punya Buku di Masa Depan Yang Jauh",
            img: "https://placehold.co/50"
        };

        setBookList((prevList) => [...prevList, newBooks]);
        alert("Buku Baru Berhasil Ditambah!");
    }
    return (
        <>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Buku-Buku yang dijual disini</h1>
                        <p className="lead text-body-secondary">Temukan koleksi buku terbaik kami di sini. Dari novel fiksi hingga buku referensi, kami memiliki semua yang Anda butuhkan.</p>
                        <p>
                            <a href="#" className="btn btn-primary my-2 mx-2">Tuku</a>
                            <a href="#" className="btn btn-secondary my-2 mx-2">Sewa</a>
                        </p>
                    </div>
                </div>
            </section>
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {bookList.map((buku) => (
                            <div className="col">
                                <div key={buku.id} className="card shadow-sm">
                                    <img src={buku.img} alt="Thumbnail" className="bd-placeholder-img card-img-top" />
                                    <div className="card-body">
                                        <h3 className="card-text">{buku.title}</h3>
                                        <p className="card-text">{buku.description}</p>
                                        <p className="card-text">{buku.author}</p>
                                        <p className="card-text">{buku.year}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Sewa</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                        <button onClick={handleClick} className=' btn btn-info'>
                            Tambah Buku Baru
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;