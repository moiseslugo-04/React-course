import type { FilterContextType } from '@/types'
import { createContext, useContext } from 'react'
export const FilterContext = createContext<null | FilterContextType>(null)
export function useFilterContext() {
  const context = useContext(FilterContext)
  if (!context) {
    throw new Error('useFilterContext must be used withing a context Provider ')
  }
  return context
}
