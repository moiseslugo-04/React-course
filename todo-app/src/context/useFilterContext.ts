import { createContext, useContext } from 'react'

export const FilterContext = createContext(null)

export function useFilterContext() {
  const context = useContext(FilterContext)
  if (!context) {
    throw new Error(
      'The useFilterContext must be used within the FilterContext Provider'
    )
  }
  return context
}
