import { useState, useMemo, useEffect } from "react";
import type { CartItem, Product } from "../../interfaces";

const STORAGE_KEY = "cart";

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const addToCart = (product: Product) => {
    setItems((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, qty: number) => {
    if (qty <= 0) return removeFromCart(id);

    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item)));
  };

  const clearCart = () => setItems([]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const subtotal = useMemo(() => items.reduce((acc, item) => acc + item.price * item.quantity, 0), [items]);

  const totalItems = useMemo(() => items.reduce((acc, item) => acc + item.quantity, 0), [items]);

  return {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    totalItems,
  };
};
