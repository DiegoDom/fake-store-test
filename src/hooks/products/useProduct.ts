import { useEffect, useState, useCallback } from "react";
import { getProductById } from "../../services/products";
import type { Product } from "../../interfaces";

export const useProduct = (id?: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProduct = useCallback(async () => {
    if (!id) return;

    try {
      setLoading(true);
      setError(null);

      const data: Product = await getProductById(id);
      setProduct(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (!id) return;

    let isMounted = true;

    const load = async () => {
      try {
        setLoading(true);
        setError(null);

        const data: Product = await getProductById(id);

        if (isMounted) {
          setProduct(data);
        }
      } catch (err) {
        if (!isMounted) return;

        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, [id]);

  const refetch = useCallback(() => {
    fetchProduct();
  }, [fetchProduct]);

  return {
    product,
    loading,
    error,
    refetch,
  };
};
