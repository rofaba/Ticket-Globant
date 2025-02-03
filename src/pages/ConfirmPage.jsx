import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function ConfirmPage() {
  const { cart, setCart } = useContext(CartContext); // ✅ Asegurar que obtenemos setCart
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length > 0) {
      setCart([]); // ✅ Vacía el carrito después de confirmar la compra
      localStorage.removeItem("cart"); // ✅ Limpia el carrito en LocalStorage
    }
  }, [cart, setCart]); // ✅ Agregar dependencias correctas

  return (
    <div>
      <h1>¡Compra realizada con éxito! 🎉</h1>
      <p>Gracias por tu compra. Te esperamos en el evento.</p>
      <button onClick={() => navigate("/")}>Volver a la tienda</button>
    </div>
  );
}

export default ConfirmPage;
