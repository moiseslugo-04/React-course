import type { CartAction, CartState } from '@/types'
export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD': {
      const indexProduct = state.findIndex(({ id }) => id === action.payload.id)
      console.log(state, indexProduct)
      if (indexProduct >= 0) {
        const newState = [
          ...state.slice(0, indexProduct),
          {
            ...state[indexProduct],
            quantity: (state[indexProduct].quantity || 1) + 1,
          },
          ...state.slice(indexProduct + 1),
        ]
        return newState
      }
      const newState = [...state, { ...action.payload, quantity: 1 }]
      return newState
    }

    case 'REMOVE': {
      const { id } = action.payload
      const productExist = state.find((product) => product.id === id)
      if (productExist) {
        const newState = state.filter((product) => product.id !== id)
        return newState
      }
      return state
    }

    case 'CLEAR':
      return []
    default:
      return state
  }
}
