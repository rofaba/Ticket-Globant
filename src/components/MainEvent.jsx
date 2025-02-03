import './MainEvent.css'
import concerts from '../data/concerts';

function MainEvent() {
    let randomindex = Math.floor(Math.random() * concerts.length)

    return(
    <div className="event_container">
        <img src={concerts[randomindex].src} />
        <h3>{concerts[randomindex].name}</h3>
        <p>{concerts[randomindex].description}</p>
        <div className="concert_date">
            <p>{concerts[randomindex].location}</p> 
            <p>{concerts[randomindex].date}</p>
        </div>
    </div>
    )
    
    }
    export default MainEvent;