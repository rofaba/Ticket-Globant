import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">Inicio</Link>
      <Link to="/checkout">Carrito</Link>
    </nav>
  );
}

export default Navbar;
