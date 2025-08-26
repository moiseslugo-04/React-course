import { useId, useState } from 'react'
import './App.css'
import data from './mocks/products.json'
import { ProductList } from './components/ProductList'
import { useFilter } from './hooks/useFilter'
function App() {
  const [products] = useState(data?.products)
  const { handleSetCategory, handleSetMinPrice, filter, filteredProducts } =
    useFilter({
      products,
    })
  const filterCategoryID = useId() // unique ID in all my app
  return (
    <div className='py-12 bg-slate-800 text-white flex flex-col gap-6'>
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
              value={filter.minPrince}
              onChange={handleSetMinPrice}
            />
            <span>${filter.minPrince}</span>
          </label>
          <label className='flex gap-3'>
            Filter by category
            <select
              name='category'
              id={filterCategoryID}
              onChange={handleSetCategory}
            >
              <option value='all'>All</option>
              <option value='Apple'>Apple</option>
            </select>
          </label>
        </form>
      </header>
      <main className='w-full flex justify-center'>
        <ProductList products={filteredProducts} />
      </main>
    </div>
  )
}

export default App
