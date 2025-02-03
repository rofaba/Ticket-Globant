/* eslint-disable react/prop-types */
import { useState } from "react";
import "./FilterBar.css";


function FilterBar({ onFilterChange }) {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFilterChange = () => {
    onFilterChange({ location, date, minPrice, maxPrice });
  };

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Filtrar por lugar"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        type="number"
        placeholder="Precio mínimo"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />

      <input
        type="number"
        placeholder="Precio máximo"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />

      <button onClick={handleFilterChange}>Aplicar Filtros</button>
    </div>
  );
}

export default FilterBar;
