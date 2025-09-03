import type { Middleware } from "@reduxjs/toolkit";

const persistenceLocalState: Middleware = (store) => (next) => (action) => {
	const result = next(action);
	console.log(result, "result");
	console.log(store.getState, "store");
	localStorage.setItem("__redux_state__", JSON.stringify(store.getState()));
	return result;
};
export { persistenceLocalState };
