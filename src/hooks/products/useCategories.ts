import { useMemo } from "react";
import type { Product } from "../../interfaces";

export const useCategories = (products: Product[]) => {
  return useMemo(() => {
    if (!products?.length) return [];

    const unique = new Set(products.map((p) => p.category));

    return ["all", ...Array.from(unique).sort()];
  }, [products]);
};
