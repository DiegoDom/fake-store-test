import { RouterProvider } from "react-router";
import { router } from "./router";

export const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
