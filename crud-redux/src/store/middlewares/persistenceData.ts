import type { Middleware } from "@reduxjs/toolkit";

export const persistenceDataFromStorage: Middleware =
	(store) => (next) => (action) => {
		const result = next(action);
		const state = store.getState();
		localStorage.setItem("__redux_state__", JSON.stringify(state));
		return result;
	};
