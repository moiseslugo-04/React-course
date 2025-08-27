import type { ProductListType, ProductType } from '@/types'
import { useState } from 'react'

export function useFilter({ products }: ProductListType) {
  const [filter, setFilter] = useState({ category: 'all', minPrice: 0 })
  const filteredProducts = products.filter((product: ProductType) => {
    if (
      (product.price >= filter.minPrice && filter.category === 'all') ||
      filter.category === product.category
    ) {
      return product
    }
  })
  const handleSetMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMinPrice = Number(event.currentTarget.value) as number
    setFilter((prev) => {
      return { ...prev, minPrice: newMinPrice }
    })
  }

  const handleSetCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = event.currentTarget.value
    setFilter((prev) => ({ ...prev, category: newCategory }))
  }
  return {
    filter,
    filteredProducts,
    handleSetCategory,
    handleSetMinPrice,
  }
}
