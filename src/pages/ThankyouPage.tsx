import { useNavigate, useLocation } from "react-router";
import { formatPrice } from "../helpers";

const orderId = Math.floor(Math.random() * 1000000);

export const ThankYouPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const totalItems = state?.totalItems ?? 0;
  const subtotal = state?.subtotal ?? 0;

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="card bg-base-200 shadow-xl max-w-md w-full text-center">
        <div className="card-body">
          <h1 className="text-2xl font-bold">🎉 Order confirmed! {orderId}</h1>

          <p className="text-gray-500">Thank you for your purchase.</p>

          <div className="divider"></div>

          <p className="text-sm">Your order has been successfully processed.</p>

          <div className="divider"></div>

          <div className="text-sm space-y-1">
            <p>
              <strong>Items:</strong> {totalItems}
            </p>
            <p>
              <strong>Total:</strong> {formatPrice(subtotal)}
            </p>
          </div>

          <button className="btn btn-primary mt-4" onClick={() => navigate("/")}>
            Continue shopping
          </button>
        </div>
      </div>
    </div>
  );
};
