import { useMemo, useState, type ChangeEvent } from "react";
import { ErrorAlert, Loader, ProductCard } from "../components";
import { useDebounce, useProducts } from "../hooks";
import type { Product } from "../interfaces";

export const HomePage = () => {
  const { products, loading, error, refetch } = useProducts();
  const [search, setSearch] = useState("");
  const [inputError, setInputError] = useState("");

  const debouncedSearch = useDebounce(search, 400);

  const filteredProducts = useMemo(() => {
    if (!debouncedSearch.trim()) return products;

    return products.filter((product: Product) => product.title.toLowerCase().includes(debouncedSearch.toLowerCase()));
  }, [debouncedSearch, products]);

  if (loading) return <Loader />;

  if (error) {
    return <ErrorAlert message={error} onRetry={refetch} />;
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    if (!value.trim()) {
      setInputError("This field is required");
    } else {
      setInputError("");
    }
  };

  return (
    <>
      <div className="mb-5 flex flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">All products</h1>
          <h2 className="text-xl">
            For <span className="text-accent">everybody</span>
          </h2>
        </div>
        <div className="flex flex-col items-end gap-1">
          <label className={`input w-2xl ${inputError ? "validator" : ""}`}>
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input value={search} onChange={handleChange} type="search" required placeholder="Search" />
          </label>
          {inputError && <p className="text-red-500 text-sm mt-1">{inputError}</p>}
        </div>
      </div>

      <section className="grid gap-6  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
    </>
  );
};
