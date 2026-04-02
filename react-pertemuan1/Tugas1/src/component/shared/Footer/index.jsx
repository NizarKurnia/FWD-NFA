import { Link } from "react-router";

export default function Footer() {
    return (
        <>
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item">
                            <Link to="/" className="nav-link px-2 text-body-secondary">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/produk" className="nav-link px-2 text-body-secondary">Product</Link>            
                        </li>
                        <li className="nav-item">
                            <Link to="/tim" className="nav-link px-2 text-body-secondary">Team</Link>           
                        </li>
                        <li className="nav-item">
                            <Link to="/kontak" className="nav-link px-2 text-body-secondary">Contact</Link>           
                        </li>
                    </ul>
                    <p className="text-center text-body-secondary">© Tukang Buku Profesional 2026</p>
                </footer>
            </div>
        </>
    )
}