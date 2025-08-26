import type { ProductListType, ProductType } from '@/types'
import React, { useState } from 'react'
export function useFilter({ products }: ProductListType) {
  const [filter, setFilter] = useState({ category: 'all', minPrince: 0 })
  const filteredProducts = products.filter((product: ProductType) => {
    if (
      (product.price >= filter.minPrince && filter.category === 'all') ||
      filter.category === product.category
    ) {
      return product
    }
  })
  const handleSetMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMinPrice = Number(e.currentTarget.value) as number
    setFilter((prev) => {
      return { ...prev, minPrince: newMinPrice }
    })
  }

  const handleSetCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.currentTarget.value
    setFilter((prev) => ({ ...prev, category: newCategory }))
  }
  return {
    filter,
    filteredProducts,
    handleSetCategory,
    handleSetMinPrice,
  }
}
