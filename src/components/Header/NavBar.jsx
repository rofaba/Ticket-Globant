import { Link } from "react-router-dom";
import "./Navbar.css";
import FilterBar from './FilterBar';
import SearchBar from './SearchBar'

function Navbar() {
  return (
    <nav className="nav">
      <FilterBar />
      <SearchBar />
      <Link to="/checkout" className="links">Carrito</Link>
    </nav>
  );
}

export default Navbar;
