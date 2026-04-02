export default function Team() {
    return (
        <>
            <div className="container pt-5 d-flex justify-content-center marketing">
                <div className="row ">
                    <h2 className="text-center mb-5">Nama Team Kita</h2>
                    <div className="col-lg-4 text-center">
                        <img
                            src="https://picsum.photos/140/140"
                            alt="Dummy"
                            className="bd-placeholder-img rounded-circle"
                        />
                        <h2 className="fw-normal">Asep</h2>
                        <p>Asep adalah seorang penulis yang kreatif dan imajinatif.</p>
                        <p>
                            <a className="btn btn-secondary" href="#">Kenalan »</a>
                        </p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img
                            src="https://picsum.photos/140/140"
                            alt="Dummy"
                            className="bd-placeholder-img rounded-circle"
                        />
                        <h2 className="fw-normal">Udin</h2>
                        <p>Udin adalah Pencetak Buku yang berpengalaman dan teliti.</p>
                        <p>
                            <a className="btn btn-secondary" href="#">Kenalan »</a>
                        </p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img
                            src="https://picsum.photos/140/140"
                            alt="Dummy"
                            className="bd-placeholder-img rounded-circle"
                        />
                        <h2 className="fw-normal">Jaka</h2>
                        <p>Jaka adalah seorang pembuat buku yang Jago dan Kuat.</p>
                        <p>
                            <a className="btn btn-secondary" href="#">Kenalan »</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}