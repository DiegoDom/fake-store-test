import { useCallback, useEffect, useState } from 'react'
import type { Product } from '../../interfaces'
import { getProducts } from '../../services/products'

const STORAGE_KEY = 'products-cache'
const TTL = 1000 * 60 * 10 // 10 minutes

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const data = await getProducts()

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          data,
          timestamp: Date.now()
        })
      )

      setProducts(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)

      if (stored) {
        const parsed = JSON.parse(stored)

        const isValid = Date.now() - parsed.timestamp < TTL

        if (isValid) {
          setProducts(parsed.data)
          return
        }
      }
    } catch (err) {
      console.warn('Cache error', err)
    }

    fetchProducts()
  }, [fetchProducts])

  const refetch = useCallback(() => {
    fetchProducts()
  }, [fetchProducts])

  return {
    products,
    loading,
    error,
    refetch
  }
}
