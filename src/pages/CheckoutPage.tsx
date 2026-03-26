import { useState } from "react";
import { useNavigate } from "react-router";
import { formatPrice } from "../helpers";
import { GoBack } from "../components";
import { useCartContext } from "../hooks/cart/useCartContext";

export const CheckoutPage = () => {
  const { subtotal, items, clearCart, totalItems } = useCartContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleConfirm = () => {
    setLoading(true);

    setTimeout(() => {
      sessionStorage.setItem("checkout-completed", "true");

      navigate("/thank-you", {
        state: { totalItems, subtotal },
        replace: true,
      });

      clearCart();
    }, 1200);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-xl font-semibold">Your cart is empty 🛒</h2>
        <GoBack />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Checkout</h1>
        <GoBack />
      </div>

      {/* 🔥 GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* 🛒 ITEMS */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="font-semibold text-lg">Order items ({items.length})</h2>

          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-base-200 p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <img src={item.image} className="w-12 h-12 rounded object-cover" />

                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>

              <span className="font-semibold">{formatPrice(item.price * item.quantity)}</span>
            </div>
          ))}
        </div>

        {/* 💳 SUMMARY */}
        <div className="card bg-base-200 shadow h-fit sticky top-6">
          <div className="card-body">
            <h2 className="card-title">Summary</h2>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>

              <div className="divider"></div>

              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
            </div>

            <button className={`btn btn-primary mt-4 w-full ${loading ? "loading" : ""}`} onClick={handleConfirm} disabled={loading}>
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
