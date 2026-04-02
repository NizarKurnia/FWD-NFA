export default function Product() {
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
                        <div className="col">
                            <div className="card shadow-sm">
                                <img
                                    src="https://picsum.photos/300/200"
                                    alt="Thumbnail"
                                    className="bd-placeholder-img card-img-top"
                                />
                                <div className="card-body">
                                    <h3 className="card-text">Masakan</h3>
                                    <p className="card-text">Buku masakan yang lengkap dengan resep-resep lezat dan mudah dibuat.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Sewa</button>
                                        </div>
                                        <small className="text-body-secondary">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <img
                                    src="https://picsum.photos/300/200"
                                    alt="Thumbnail"
                                    className="bd-placeholder-img card-img-top"
                                />
                                <div className="card-body">
                                    <h3 className="card-text">Perang</h3>
                                    <p className="card-text">Buku tentang strategi dan taktik perang yang lengkap.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Sewa</button>
                                        </div>
                                        <small className="text-body-secondary">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <img
                                    src="https://picsum.photos/300/200"
                                    alt="Thumbnail"
                                    className="bd-placeholder-img card-img-top"
                                />
                                <div className="card-body">
                                    <h3 className="card-text">Olahraga</h3>
                                    <p className="card-text">Buku tentang olahraga yang lengkap dengan tips dan trik untuk meningkatkan performa.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Sewa</button>
                                        </div>
                                        <small className="text-body-secondary">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}