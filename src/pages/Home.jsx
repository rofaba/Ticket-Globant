import ConcertList from "../components/ConcertList";
import MainEvent from "../components/MainEvent"

function Home() {
  return (
    <div>
      <MainEvent />
      <h2>Conciertos Disponibles</h2>
      <ConcertList />
    </div>
  );
}

export default Home;
