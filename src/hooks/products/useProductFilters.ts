import { useMemo, useState } from "react";
import type { Product } from "../../interfaces";
import { useDebounce } from "../shared/useDebounce";

export const useProductFilters = (products: Product[]) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const debouncedSearch = useDebounce(search, 400);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchSearch = product.title.toLowerCase().includes(debouncedSearch.toLowerCase());

      const matchCategory = category === "all" || product.category === category;

      return matchSearch && matchCategory;
    });
  }, [products, debouncedSearch, category]);

  return {
    search,
    setSearch,
    category,
    setCategory,
    filteredProducts,
  };
};
