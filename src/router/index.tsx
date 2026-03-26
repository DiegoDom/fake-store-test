// router.tsx
import { createBrowserRouter, Navigate } from "react-router";
import { CartPage, CheckoutPage, HomePage, ProductDetailPage, ThankYouPage } from "../pages";
import { MainLayout } from "../layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/thank-you",
    element: <ThankYouPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
