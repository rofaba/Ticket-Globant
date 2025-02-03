/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CardButton from "./CardButton";
import "../App.css";

function ConcertCard({ concert }) {
  const { addToCart, cart } = useContext(CartContext);
  const [message, setMessage] = useState("");


  //validar si producto existe para las cantidades y mensajes de respuesta

  const handleAddToCart = () => {

      const existingItem = cart.find((item) => item.id === concert.id);

      if (existingItem && existingItem.quantity >= 6) {
      setMessage("No puedes agregar más de 6 entradas para este concierto ");
      setTimeout(() => setMessage(""), 2000);
      return;
    }

    addToCart(concert);
    setMessage("OK - Producto agregado al carrito");
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="card">
      <img src={concert.src} alt="imagen_concierto" />
      <h3>{concert.name}</h3>
      <p>{concert.description}</p>
      <p><strong>Fecha:</strong> {concert.date}</p>
      <p><strong>Lugar:</strong> {concert.location}</p>
      <p><strong>Precio:</strong> ${concert.price}</p>

      <CardButton onClick={handleAddToCart} />
      
      {message && (
        <p className={message.includes("OK") ? "success-message" : "error-message"}>
          {message}
        </p>
      )}
      
    </div>
  );
}

export default ConcertCard;

