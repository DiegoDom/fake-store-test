import { useEffect, useState } from "react";
import { useCartContext } from "../../hooks/cart/useCartContext";
import type { CartItem } from "../../interfaces";
import { useDebounce } from "../../hooks";

interface Props {
  item: CartItem;
}

const MAX_QTY = 99;

export const CartItemCard = ({ item }: Props) => {
  const { updateQuantity, removeFromCart } = useCartContext();
  const [localQty, setLocalQty] = useState(item.quantity);

  const debouncedQty = useDebounce(localQty, 400);

  useEffect(() => {
    if (debouncedQty !== item.quantity && debouncedQty >= 1) {
      updateQuantity(item.id, debouncedQty);
    }
  }, [debouncedQty, item.id, item.quantity, updateQuantity]);

  // 🔹 Handlers
  const handleDecrease = () => {
    setLocalQty((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setLocalQty((prev) => Math.min(MAX_QTY, prev + 1));
  };

  const handleInputChange = (value: string) => {
    if (value === "") {
      setLocalQty(0);
      return;
    }

    const qty = Number(value);

    if (isNaN(qty)) return;

    setLocalQty(qty);
  };

  return (
    <div className="flex gap-4 border-b pb-6 items-center">
      <img src={item.image} className="w-20 h-20 rounded-lg object-cover" />

      <div className="flex-1">
        <h2 className="font-medium">{item.title}</h2>
        <p className="text-sm text-gray-500">{item.category}</p>

        <p className="font-semibold mt-1">${item.price.toFixed(2)}</p>
      </div>

      {/* 🔥 Quantity Stepper PRO */}
      <div className="flex items-center gap-2">
        <button className="btn btn-sm btn-outline text-xl" onClick={handleDecrease} disabled={localQty <= 1}>
          -
        </button>

        <input
          type="number"
          min={1}
          max={MAX_QTY}
          value={localQty}
          onFocus={(e) => e.target.select()}
          onChange={(e) => handleInputChange(e.target.value)}
          className="input input-bordered input-sm w-16 text-center"
          onBlur={() => {
            if (localQty < 1) setLocalQty(1);
            if (localQty > MAX_QTY) setLocalQty(MAX_QTY);
          }}
        />

        <button className="btn btn-sm btn-outline text-xl" onClick={handleIncrease} disabled={localQty >= MAX_QTY}>
          +
        </button>
      </div>

      <button className="btn btn-ghost btn-error text-xl btn-sm" onClick={() => removeFromCart(item.id)}>
        ✕
      </button>
    </div>
  );
};
