import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { User, UserId, UserWithId, UsersTypeState } from "./types";
import { fetchUsers } from "./userThunk";

const initialState: UsersTypeState = {
	users: [],
	loading: false,
	error: null,
};
const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			const newUser = { ...action.payload, id };
			state.users.push(newUser);
		},
		updateUser: (state, action: PayloadAction<UserWithId>) => {
			const userId = action.payload.id;
			state.users = state.users.map((user) =>
				user.id === userId ? action.payload : user,
			);
		},
		removeUser: (state, action: PayloadAction<UserId>) => {
			state.users = state.users.filter(({ id }) => id !== action.payload);
		},
		rollbackUser: (state, action: PayloadAction<UserWithId>) => {
			const userExist = state.users.find(
				(user) => user.id === action.payload.id,
			);
			if (!userExist) state.users.push(action.payload);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.pending, (state) => {
			state.loading = true;
			state.error = null;
		});

		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.users = action.payload;
			state.loading = false;
		});

		builder.addCase(fetchUsers.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload ?? "Unknown error";
		});
	},
});

export const { addUser, updateUser, removeUser, rollbackUser } =
	userSlice.actions;
export default userSlice.reducer;
