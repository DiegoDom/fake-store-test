import { createContext } from "react";
import type { Product, CartItem } from "../interfaces";

export interface CartContextType {
  items: CartItem[];
  subtotal: number;
  totalItems: number;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, qty: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | null>(null);
