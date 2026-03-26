import { RouterProvider } from "react-router";
import { CartProvider } from "./components/cart/CartProvider";
import { router } from "./router";

export const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};
