import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  if (cart.length === 0) {
    return (
      <div>
        <h1>Carrito de Compras</h1>
        <p>No tienes productos en tu carrito.</p>
        <button onClick={() => navigate("/")}>Volver a la tienda</button>
      </div>
    );
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleConfirmPurchase = () => {
    setMessage("Compra confirmada ✅ Redirigiendo...");
    
    setTimeout(() => {
      navigate("/confirm");
    }, 2000);
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.map((item) => (
        <div key={item.id} className="card">
          <h3>{item.name}</h3>
          <p>Precio: ${item.price}</p>
          <p>
            Cantidad: 
            <input 
              type="number" 
              value={item.quantity} 
              min="1" 
              max="6" 
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} 
            />
          </p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={handleConfirmPurchase}>Confirmar Compra</button>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
}

export default Checkout;
