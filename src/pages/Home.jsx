import ConcertList from "../components/ConcertList";
import MainEvent from "../components/MainEvent"

function Home() {
  return (
    <div>
      <MainEvent />
      <h1>Conciertos Disponibles</h1>
      <ConcertList />
    </div>
  );
}

export default Home;
