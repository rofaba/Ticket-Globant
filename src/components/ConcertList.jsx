import { useState } from "react";
import ConcertCard from "./ConcertCard";
import concerts from "../data/concerts";
import "./ConcertList.css"

function ConcertList() {
  
  const [filteredConcerts] = useState(concerts);

  return (
    <>
    
      <div className="concert-list">
        {filteredConcerts.length > 0 ? (
          filteredConcerts.map((concert) => (
            <ConcertCard key={concert.id} concert={concert} />
          ))
        ) : (
          <p>No se encontraron conciertos</p>
        )}
      </div>
    </>
  );
}

export default ConcertList;
