import { useEffect, useState, useCallback } from 'react'
import { getProductById } from '../../services/products'
import type { Product } from '../../interfaces'

const STORAGE_KEY = 'product-cache'
const TTL = 1000 * 60 * 10 // 10 min

type ProductCache = Record<string, { data: Product; timestamp: number }>

export const useProduct = (id?: string) => {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchProduct = useCallback(async () => {
    if (!id) return

    try {
      setLoading(true)
      setError(null)

      const data = await getProductById(id)

      const stored = localStorage.getItem(STORAGE_KEY)
      const cache: ProductCache = stored ? JSON.parse(stored) : {}

      cache[id] = {
        data,
        timestamp: Date.now()
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(cache))

      setProduct(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    if (!id) return

    try {
      const stored = localStorage.getItem(STORAGE_KEY)

      if (stored) {
        const cache: ProductCache = JSON.parse(stored)
        const cachedProduct = cache[id]

        const isValid =
          cachedProduct && Date.now() - cachedProduct.timestamp < TTL

        if (isValid) {
          setProduct(cachedProduct.data)
          return
        }
      }
    } catch (err) {
      console.warn('Cache error', err)
    }

    fetchProduct()
  }, [id, fetchProduct])

  const refetch = useCallback(() => {
    fetchProduct()
  }, [fetchProduct])

  return {
    product,
    loading,
    error,
    refetch
  }
}
