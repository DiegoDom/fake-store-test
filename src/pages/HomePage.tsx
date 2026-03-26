import { ErrorAlert, Loader, ProductCard, ProductFilters } from "../components";
import { useCategories, useProductFilters, useProducts } from "../hooks";

export const HomePage = () => {
  const { products, loading, error, refetch } = useProducts();
  const categories = useCategories(products);

  const { search, setSearch, category, setCategory, filteredProducts } = useProductFilters(products);

  if (loading) return <Loader />;
  if (error) return <ErrorAlert message={error} onRetry={refetch} />;

  return (
    <>
      <ProductFilters search={search} onSearch={setSearch} categories={categories} category={category} onCategoryChange={setCategory} />

      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
    </>
  );
};
