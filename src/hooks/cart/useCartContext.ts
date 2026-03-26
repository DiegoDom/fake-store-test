import { useContext } from "react";
import { CartContext, type CartContextType } from "../../context/cart.context";

export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within CartProvider");
  }

  return context;
};
