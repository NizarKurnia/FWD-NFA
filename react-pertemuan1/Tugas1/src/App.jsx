import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages";
import Tim from "./pages/Tim";
import Produk from "./pages/Produk";
import Kontak from "./pages/Kontak";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";


function App() {

  return (
    <>
      <BrowserRouter >
      <Routes >
        <Route index element={<Home />}/>
        <Route path="produk" element={<Produk />}/>
        <Route path="tim" element={<Tim />}/>
        <Route path="kontak" element={<Kontak />}/>
        <Route path="login" element={<Login />}/>
        <Route path="register" element={<Register />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
