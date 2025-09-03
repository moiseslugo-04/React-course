import type { RootState } from "@/store/store";
import type { TypedUseSelectorHook } from "react-redux";
import { useSelector as useReduxSelector } from "react-redux";
const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export { useSelector };
