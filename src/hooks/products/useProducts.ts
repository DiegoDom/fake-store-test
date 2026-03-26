import { useCallback, useEffect, useState } from "react";
import type { Product } from "../../interfaces";
import { getProducts } from "../../services/products";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data: Product[] = await getProducts();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        setLoading(true);
        setError(null);

        const data: Product[] = await getProducts();

        if (isMounted) {
          setProducts(data);
        }
      } catch (err) {
        if (!isMounted) return;

        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  const refetch = useCallback(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    loading,
    error,
    refetch,
  };
};
