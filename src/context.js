import React, { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = element => {
    if (cart.find(item => item.id === element.id)) {
      // don't add if the element is already added
      return;
    }
    setCart([...cart, element]);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
