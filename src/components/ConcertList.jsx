import { useState } from "react";
import ConcertCard from "./ConcertCard";
import concerts from "../data/concerts";
import FilterBar from "./FilterBar";

function ConcertList() {
  const [filteredConcerts, setFilteredConcerts] = useState(concerts);

  const handleFilterChange = ({ location, date, minPrice, maxPrice }) => {
    let filtered = concerts;

    if (location) {
      filtered = filtered.filter((concert) =>
        concert.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (date) {
      filtered = filtered.filter((concert) => concert.date === date);
    }

    if (minPrice) {
      filtered = filtered.filter(
        (concert) => concert.price >= parseInt(minPrice)
      );
    }

    if (maxPrice) {
      filtered = filtered.filter(
        (concert) => concert.price <= parseInt(maxPrice)
      );
    }

    setFilteredConcerts(filtered);
  };

  return (
    <>
      <FilterBar onFilterChange={handleFilterChange} />
      <div className="concert-list">
        {filteredConcerts.length > 0 ? (
          filteredConcerts.map((concert) => (
            <ConcertCard key={concert.id} concert={concert} />
          ))
        ) : (
          <p>No se encontraron conciertos con los filtros aplicados.</p>
        )}
      </div>
    </>
  );
}

export default ConcertList;