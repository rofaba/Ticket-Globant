import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h1>404 - Página No Encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <button onClick={() => navigate("/")}>Volver a la tienda</button>
    </div>
  );
}

export default NotFound;
