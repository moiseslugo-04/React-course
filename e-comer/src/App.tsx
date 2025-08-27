import { useState } from 'react'
import './App.css'
import data from './mocks/products.json'
import { ProductList } from './components/ProductList'
import { useFilter } from './hooks/useFilter'
import { useCart } from './hooks/useCart'
import { Filters } from './components/Filters'
import { CartContext } from './hooks/useCartContext'
import { CartSummary } from './components/CartSummary'
import { FilterContext } from './hooks/useFilterContext'
function App() {
  const [products] = useState(data?.products)
  const filters = useFilter({ products })
  const cart = useCart()
  return (
    <FilterContext value={filters}>
      <div className='py-12 bg-slate-800 text-white flex flex-col gap-6'>
        <Filters />
        <CartContext value={cart}>
          <div className='container mx-auto px-4 flex flex-col md:flex-row gap-8'>
            <main className='w-full flex justify-center'>
              <ProductList />
            </main>
            <aside className='md:w-80 bg-slate-700 p-4 rounded-lg'>
              <CartSummary />
            </aside>
          </div>
        </CartContext>
      </div>
    </FilterContext>
  )
}

export default App
