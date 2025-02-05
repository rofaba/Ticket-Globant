import './MainEvent.css'
import concerts from '../data/concerts';
import { useState, useEffect } from 'react';

function MainEvent() {

    const [concert, setConcert] = useState(concerts[0]);
    
    useEffect(() => {  
        function getRandomConcert() {
        let index = Math.floor(Math.random() * concerts.length);
        setConcert(concerts[index])
        }

        const intervalIndex = setInterval(getRandomConcert, 10000);
        return () => clearInterval(intervalIndex);

    }, []);


    return(
    <div className="event_container">
        <img src={concert.src} />
            <div className="concert-data">
                <h2>{concert.name}</h2>
                <p>{concert.description}</p>
                <p>{concert.location}</p> 
                <p>{concert.date}</p>
                <p>IR DETALLE</p>
            </div>
    </div>
    )
    
    }
    export default MainEvent;