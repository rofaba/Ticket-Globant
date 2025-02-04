import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <nav>
            <h1>Conciertos</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Buscar concierto..."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button type="submit">Buscar</button>
            </form>
        </nav>
    );
};

export default SearchBar;
