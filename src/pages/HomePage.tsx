import { ProductCard } from "../components";

export const HomePage = () => {
  return (
    <>
      <div className="mb-5">
        <h1 className="text-3xl font-bold">All products</h1>
        <h2 className="text-xl">
          For <span className="text-accent">everybody</span>
        </h2>
      </div>
      <section className="grid gap-6  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </>
  );
};
