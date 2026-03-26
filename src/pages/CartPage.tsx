import { Link } from "react-router";
import { CartItemCard, GoBack } from "../components";
import { formatPrice } from "../helpers";
import { useCartContext } from "../hooks/cart/useCartContext";

export const CartPage = () => {
  const { totalItems, subtotal, items } = useCartContext();

  return (
    <>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          <h2 className="text-xl">
            You <span className="text-accent">added ({totalItems}) Items</span>
          </h2>
        </div>
        <GoBack />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-6">
          {items.map((item) => (
            <CartItemCard key={`${item.id}-${item.quantity}`} item={item} />
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div>
          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h2 className="card-title text-lg">Order summary</h2>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>
                    Subtotal ({totalItems}) {totalItems === 1 ? "item" : "items"}
                  </span>
                  <span>{formatPrice(subtotal * totalItems)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping estimate</span>
                  <span>$0.00</span>
                </div>

                <div className="divider my-2"></div>

                <div className="flex justify-between font-semibold">
                  <span>Order total</span>
                  <span>{formatPrice(subtotal * totalItems)}</span>
                </div>
              </div>

              {items.length > 0 && (
                <Link to="/checkout" className="btn btn-primary mt-4 w-full">
                  Checkout
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
