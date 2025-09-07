import userReducer from "@/features/users/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import { persistenceDataFromStorage } from "./middlewares/persistenceData";

const preloadedState = (() => {
	try {
		const persistenceData = localStorage.getItem("__redux_state__");
		if (!persistenceData) return undefined;

		const parsedData = JSON.parse(persistenceData);

		// Ensure the structure matches your store
		return {
			users: {
				users: parsedData?.users?.users || [],
				loading: parsedData?.users?.loading || false,
				error: parsedData?.users?.error || null,
			},
		};
	} catch (error) {
		console.error("Error loading persisted state:", error);
		return undefined; // Let Redux use the initial state from reducers
	}
})();
export const store = configureStore({
	reducer: {
		users: userReducer,
	},
	preloadedState,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(persistenceDataFromStorage);
	},
});
// types
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type { AppDispatch, RootState };
