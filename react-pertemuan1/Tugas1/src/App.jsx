
function App() {

  return (
    <>
      {/* Header */}
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
              <span className="ms-2 fs-4">BookStore</span>
            </a>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#home" className="nav-link px-2">Home</a></li>
            <li><a href="#product" className="nav-link px-2">Product</a></li>
            <li><a href="#team" className="nav-link px-2">Team</a></li>
            <li><a href="#contact" className="nav-link px-2">Contact</a></li>
          </ul> <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Sign-up</button>
          </div>
        </header>
      </div>

      {/* Heros */}
      <div id="home" className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Jual Buku Langka dan Edisi Terbatas</h1>
            <p className="lead">Temukan koleksi buku langka dan edisi terbatas yang tidak bisa Anda temukan di mana-mana.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
            </div>
          </div> <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img className="rounded-lg-3" src="https://picsum.photos/720/600" alt="" width="720" />
          </div>
        </div>
      </div>

      {/* produk */}
      <section id="product" className="py-5 text-center container">
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

      {/* Team */}
      <div id="team" className="container pt-5 d-flex justify-content-center marketing">
        <div className="row">
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

      {/* Contact */}
      <div id="contact" className="container py-5">
        <h1 className="text-center mb-4">Contact Us</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Your name" />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label for="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Write your message..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>


      {/* footer */}
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#home" className="nav-link px-2 text-body-secondary">Home</a>
            </li>
            <li className="nav-item">
              <a href="#product" className="nav-link px-2 text-body-secondary">Product</a>
            </li>
            <li className="nav-item">
              <a href="#team" className="nav-link px-2 text-body-secondary">Team</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link px-2 text-body-secondary">Contact</a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">© Tukang Buku Profesional 2026</p>
        </footer>
      </div>
    </>
  )
}

export default App
