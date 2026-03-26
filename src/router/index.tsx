// router.tsx
import { createBrowserRouter, Navigate, type RouteObject } from "react-router";
import { CartPage, CheckoutPage, HomePage } from "../pages";
import { MainLayout } from "../layouts";

const AppRoutes: RouteObject[] = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "cart",
    element: <CartPage />,
  },
  {
    path: "checkout",
    element: <CheckoutPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: AppRoutes,
  },
]);
