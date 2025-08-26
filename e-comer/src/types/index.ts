interface ProductType {
  id: number
  thumbnail: string
  title: string
  price: number
  category: string
  onClick?: (item: ProductType) => void
}
interface ProductListType {
  products: ProductType[]
}
export type { ProductType, ProductListType }
