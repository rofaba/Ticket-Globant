import ConcertList from "../components/ConcertList";
import MainEvent from "../components/MainEvent"
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div style={{ textAlign: "center" }}> 
      <MainEvent />
      <Link classname="carrito" to="/checkout">CARRITO</Link>
      
      <h2>Conciertos Disponibles</h2>
      <ConcertList />
    </div>
  );
}

export default Home;
