import { getAllProducts } from '@/services/products'
import type { ProductType } from '@/types'
import { useEffect, useState } from 'react'
const API_PRODUCTS_URL = 'https://dummyjson.com/products'
export function useProducts() {
  const [products, setProduct] = useState<ProductType[] | []>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(null)
    getAllProducts(API_PRODUCTS_URL)
      .then(setProduct)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])
  return { products, error, loading }
}
