import './Header.css'
import FilterBar from './FilterBar';

function Header() {
    return(
        <div className='header'>
            <h3>Ticket-g</h3>
            <FilterBar />
        </div>
    )
}

export default Header;