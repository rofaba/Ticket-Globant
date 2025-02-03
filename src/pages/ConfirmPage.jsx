import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function ConfirmPage() {
  const { cart, setCart } = useContext(CartContext); 
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length > 0) {
      setCart([]); 
      localStorage.removeItem("cart");
    }
  }, [cart, setCart]); 

  return (
    <div>
      <h1>¡Compra realizada con éxito! 🎉</h1>
      <p>Gracias por tu compra. Te esperamos en el evento.</p>
      <button onClick={() => navigate("/")}>Volver a la tienda</button>
    </div>
  );
}

export default ConfirmPage;
