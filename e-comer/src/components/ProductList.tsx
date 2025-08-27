import type { ProductType } from '@/types'
import { Product } from './Product'
import { useFilterContext } from '@/hooks/useFilterContext'
export function ProductList() {
  const { filteredProducts } = useFilterContext()
  return (
    <ul
      className='container grid gap-3 grid-cols-2 md:grid-cols-3
            lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]'
    >
      {filteredProducts.slice(0, 10).map((product: ProductType) => {
        return <Product key={product.id} {...product} />
      })}
    </ul>
  )
}
