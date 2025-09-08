import type { RootState, AppDispatch } from '@/store/store'
import { useDispatch, useSelector as useReducerSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

export const useSelector: TypedUseSelectorHook<RootState> = useReducerSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
