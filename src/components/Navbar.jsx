import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 40px",
        position: "sticky",
        top: 0,
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(15px)",
        zIndex: 1000,
        borderBottom: "1px solid #eee",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="Antunes Automação" style={{ height: "55px" }} />
      </Link>

      <div style={{ display: "flex", gap: "30px" }}>
        <Link to="/">Início</Link>
        <Link to="/historia">História</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/clientes">Clientes</Link>
        <Link to="/contato">Contato</Link>
      </div>
    </nav>
  );
}
