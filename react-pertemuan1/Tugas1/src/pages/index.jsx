import Contact from "../component/shared/Contact";
import Footer from "../component/shared/Footer";
import Header from "../component/shared/Header";
import Hero from "../component/shared/Hero";
import Product from "../component/shared/Product";
import Team from "../component/shared/Team";

export default function Home() {
    return (
        <>
            {/* Header */}
            <Header />
            {/* Heros */}
            <Hero />
            {/* produk */}
            <Product />
            {/* Team */}
            <Team />
            {/* Contact */}
            <Contact />
            {/* footer */}
            <Footer />
        </>
    )
}