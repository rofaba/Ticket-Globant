import { Link } from "react-router-dom";
import "./Navbar.css";
import FilterBar from './FilterBar';

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="links">Inicio</Link>
      <FilterBar />
      <Link to="/checkout" className="links">Carrito</Link>
    </nav>
  );
}

export default Navbar;
