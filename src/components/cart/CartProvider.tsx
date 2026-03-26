import type { ReactNode } from "react";
import { useCart } from "../../hooks/cart/useCart";
import { CartContext } from "../../context/cart.context";

interface Props {
  children: ReactNode;
}

export const CartProvider = ({ children }: Props) => {
  const cart = useCart();

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};
