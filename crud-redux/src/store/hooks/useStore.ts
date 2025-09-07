import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector as useReducerSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";

const useAppSelector: TypedUseSelectorHook<RootState> = useReducerSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();
export { useAppDispatch, useAppSelector };
