import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Início</Link>
      <Link to="/historia">História</Link>
      <Link to="/servicos">Serviços</Link>
      <Link to="/clientes">Clientes</Link>
      <Link to="/contato">Contato</Link>
    </nav>
  );
}
