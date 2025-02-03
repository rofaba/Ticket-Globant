/* eslint-disable react/prop-types */import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (concert) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === concert.id);
      
      if (existingItem) {
        // Validar que no se excedan las 6 entradas por concierto
        if (existingItem.quantity >= 6) {
          alert("No puedes agregar más de 6 entradas para este concierto.");
          return prevCart;
        }
        return prevCart.map((item) =>
          item.id === concert.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
  
      return [...prevCart, { ...concert, quantity: 1 }];
    });
  };
  

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      alert("La cantidad no puede ser menor a 1.");
      return;
    }
  
    if (quantity > 6) {
      alert("No puedes comprar más de 6 entradas para este concierto.");
      return;
    }
  
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };
  

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
export default CartProvider;