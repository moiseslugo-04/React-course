import { cartReducer } from '@/reducer/cart'
import { useReducer } from 'react'
import type { CartState, ProductType } from '@/types'

const initialState: CartState = []
export function useCart() {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  console.log(state)
  const addToCart = (product: ProductType) => {
    dispatch({ type: 'ADD', payload: product })
  }
  const removeFromCart = ({ id }: { id: number }) => {
    dispatch({ type: 'REMOVE', payload: { id } })
  }
  const clearCart = () => dispatch({ type: 'CLEAR' })
  return { state, addToCart, removeFromCart, clearCart }
}
