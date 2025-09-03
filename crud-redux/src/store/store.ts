import userReducer from "@/features/users/userSlice";
import { DEFAULT_STATE } from "@/utils/constants";
import { configureStore } from "@reduxjs/toolkit";
import { persistenceLocalState } from "./middlewares/localStorage";
import { syncWithDatabase } from "./middlewares/syncWithDatabase";
const store = configureStore({
	reducer: { users: userReducer },
	preloadedState: {
		users: (() => {
			const persistedSate = localStorage.getItem("__redux_state__");
			return persistedSate ? JSON.parse(persistedSate).users : DEFAULT_STATE;
		})(),
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware()
			.concat(persistenceLocalState)
			.concat(syncWithDatabase);
	},
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
