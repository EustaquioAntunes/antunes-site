import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Inicio from "./pages/Inicio.jsx";
import Historia from "./pages/Historia.jsx";
import Servicos from "./pages/Servicos.jsx";
import Clientes from "./pages/Clientes.jsx";
import Contato from "./pages/Contato.jsx";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>

      <Footer />
<a
  href="https://wa.me/5531988888888"
  style={{
    position: "fixed",
    bottom: "25px",
    right: "25px",
    background: "#25D366",
    width: "65px",
    height: "65px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "38px",
    textDecoration: "none",
    zIndex: 2000,
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
  }}
>
  ☎
</a>

    </>
  );
}
