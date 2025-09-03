import { DEFAULT_STATE } from "@/utils/constants";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { UpdateUserPayload, User, UserId, UserWithId } from "./types";
const initialState: UserWithId[] = DEFAULT_STATE;
// TODO:implement the Fetch users from API
const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addToUser: (store, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			store.push({ id, ...action.payload }); // we can use push because immer is used internally
		},
		updateFromUser: (store, action: PayloadAction<UpdateUserPayload>) => {
			const index = store.findIndex((user) => user.id === action.payload.id);
			if (index !== -1) {
				store[index] = { ...store[index], ...action.payload.updates };
			}
		},
		removeFromUser: (store, actions: PayloadAction<UserId>) => {
			return store.filter((user) => user.id !== actions.payload);
		},

		rollbackUser: (store, action: PayloadAction<UserWithId>) => {
			const isUserAlreadyDefined = store.some(
				(user) => user.id === action.payload.id,
			);
			if (!isUserAlreadyDefined) {
				store.push(action.payload);
			}
		},
	},
});
export default userSlice.reducer;
export const { addToUser, removeFromUser, updateFromUser, rollbackUser } =
	userSlice.actions;
