import { DEFAULT_STATE } from "@/utils/constants";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { User, UserId, UserWithId } from "./types";
const initialState: UserWithId[] = DEFAULT_STATE;
// TODO:implement the Fetch users from API
const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			state.push({ id, ...action.payload }); // we can use push because immer is used internally
		},
		updatedUser: () => {},
		deleteUser: (state, actions: PayloadAction<UserId>) => {
			return state.filter((user) => user.id !== actions.payload);
		},
		rollbackUser: (state, action: PayloadAction<UserWithId>) => {
			const isUserAlreadyDefined = state.some(
				(user) => user.id === action.payload.id,
			);
			if (!isUserAlreadyDefined) {
				state.push(action.payload);
			}
		},
	},
});

export default userSlice.reducer;
export const { addUser, updatedUser, deleteUser, rollbackUser } =
	userSlice.actions;
