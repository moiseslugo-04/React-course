import './App.css'
import { ProductList } from '@/components/ProductList'
import { useFilter } from '@/hooks/useFilter'
import { useCart } from '@/hooks/useCart'
import { Filters } from '@components/Filters'
import { CartContext } from '@context/useCartContext'
import { CartSummary } from '@components/CartSummary'
import { FilterContext } from '@/context/useFilterContext'
import { useProducts } from '@hooks/useProducts'
function App() {
  const { products } = useProducts()
  const filters = useFilter({ products })
  const cart = useCart()
  return (
    <div className='h-vh py-12 bg-slate-800 text-white flex flex-col gap-6'>
      <FilterContext value={filters}>
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
      </FilterContext>
    </div>
  )
}

export default App
