import './MainEvent.css'
import concerts from '../data/concerts';

function MainEvent() {
    let randomindex = Math.floor(Math.random() * concerts.length)

    return(
    <div className="event_container">
        <img src={concerts[randomindex].src} />
            <div className="concert-data">
                <h2>{concerts[randomindex].name}</h2>
                <p>{concerts[randomindex].description}</p>
                <p>{concerts[randomindex].location}</p> 
                <p>{concerts[randomindex].date}</p>
            </div>
    </div>
    )
    
    }
    export default MainEvent;