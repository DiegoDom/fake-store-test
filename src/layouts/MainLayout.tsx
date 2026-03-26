import { Outlet } from "react-router";
import { Footer, Navbar } from "../components";

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <header className="shadow-md z-50">
        <Navbar />
      </header>
      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
      {/* <Loader /> */}
    </div>
  );
};
