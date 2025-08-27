import type { CartContextType } from '@/types'
import { useContext, createContext } from 'react'
export const CartContext = createContext<CartContextType | null>(null)
export function useCartContext() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCartContext must be used within a CartContext provider')
  }
  return context
}
