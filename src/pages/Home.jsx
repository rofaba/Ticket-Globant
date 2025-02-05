import ConcertList from "../components/ConcertList";
import MainEvent from "../components/MainEvent"
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div style={{ textAlign: "center" }}> 
      <MainEvent />
      <Link to="/checkout"> 
      <img style={{width:"50px", padding:"20px"}} src="https://th.bing.com/th/id/OIP.Sdow3Qbfw0GfzPlDZHatcQAAAA?rs=1&pid=ImgDetMain" alt="carrito"/> 
      </Link>
      
      <h2>Conciertos Disponibles</h2>
      <ConcertList />
    </div>
  );
}

export default Home;
