import type { ProductListType, ProductType } from '@/types'
import { Product } from './Product'
export function ProductList({ products }: ProductListType) {
  return (
    <ul
      className='container grid gap-3 grid-cols-2 md:grid-cols-3
            lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]'
    >
      {products.slice(0, 10).map((product: ProductType) => {
        return <Product key={product.id} {...product} onClick={() => {}} />
      })}
    </ul>
  )
}
