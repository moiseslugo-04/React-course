import type { RootState } from "@/store/store";
import { createSelector } from "@reduxjs/toolkit";
import type { UserId } from "./types";

// small layer to get more control
const selectUsers = (state: RootState) => state.users.users;

const createTypeSelector = createSelector.withTypes<RootState>();

const selectAllUsers = createTypeSelector([selectUsers], (users) => users);
const selectUserById = createTypeSelector(
	[selectUsers, (_, userId: UserId | null | undefined) => userId],
	(users, userId) => {
		if (!userId) return null;
		return users.find((user) => user.id === userId);
	},
);
export { selectAllUsers, selectUserById };
