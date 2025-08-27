import { getAllCategories } from '@/services/products'
import type { Category } from '@/types'
import { useEffect, useState } from 'react'
const API_CATEGORIES_URL = 'https://dummyjson.com/products/categories'
export function useCategories() {
  const [categories, setCategories] = useState<Category[] | []>([])
  const [error, setError] = useState<null | string>(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setError(null)
    getAllCategories(API_CATEGORIES_URL)
      .then(setCategories)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])
  return { categories, error, loading }
}
