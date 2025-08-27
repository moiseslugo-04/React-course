import { useCategories } from '@/hooks/useCategories'
import { useFilterContext } from '@context/useFilterContext'
import type { Category } from '@/types'
import { useId } from 'react'
export function Filters() {
  const filterCategoryID = useId() // unique ID in all my app
  const { filter, handleSetCategory, handleSetMinPrice } = useFilterContext()
  const { categories } = useCategories()
  return (
    <header className='flex  flex-col  items-center gap-4'>
      <h1>Shopping cart </h1>
      <form className='flex gap-4'>
        <label className='flex gap-3'>
          Filter by Min Price
          <input
            type='range'
            name='minPrice'
            min={0}
            max={1000}
            value={filter.minPrice}
            onChange={handleSetMinPrice}
          />
          <span>${filter.minPrice}</span>
        </label>
        <label className='flex gap-3'>
          Filter by category
          <select
            className='bg-blue-900'
            name='category'
            id={filterCategoryID}
            onChange={handleSetCategory}
          >
            <option value='all'>All</option>
            {categories.map((category: Category) => {
              return <option value={category.slug}>{category.name}</option>
            })}
          </select>
        </label>
      </form>
    </header>
  )
}
