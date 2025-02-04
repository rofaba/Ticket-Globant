import { Link } from "react-router-dom";
import Navbar from "./NavBar";
import './Header.css';

function Header() {
    return (
        <div className='cabecera'>
            <Link to="/" className="links">Ticket-G</Link>
            <Navbar />
        </div>
    )
}

export default Header;