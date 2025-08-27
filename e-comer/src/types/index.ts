interface ProductType {
  id: number
  thumbnail: string
  title: string
  price: number
  category: string
  quantity?: number
}

interface ProductListType {
  products: ProductType[]
}

//Reducer cart types
type CartAction =
  | { type: 'ADD'; payload: ProductType }
  | { type: 'REMOVE'; payload: { id: number } }
  | { type: 'CLEAR' }
type CartState = ProductType[]
interface FilterProps {
  filter: { minPrice: number; category: string }
  handleSetMinPrice: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSetCategory: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

interface FilterContextType {
  filter: { minPrice: number; category: string }
  filteredProducts: Array<ProductType>
  handleSetCategory: (event: React.ChangeEvent<HTMLSelectElement>) => void
  handleSetMinPrice: (event: React.ChangeEvent<HTMLInputElement>) => void
}
interface CartContextType {
  state: CartState
  addToCart: (product: ProductType) => void
  removeFromCart: ({ id }: { id: number }) => void
  clearCart: () => void
}

export type {
  ProductType,
  ProductListType,
  CartAction,
  CartState,
  FilterProps,
  CartContextType,
  FilterContextType,
}
