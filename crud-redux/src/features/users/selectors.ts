import type { RootState } from "@/store/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectUsers = (state: RootState) => state.users;
const createTypeSelector = createSelector.withTypes<RootState>();
const selectUserById = createTypeSelector(
	[selectUsers, (_, userId: string | undefined) => userId],
	(users, userId) => (userId ? users.find((u) => u.id === userId) : undefined),
);

const selectAllUsers = createTypeSelector([selectUsers], (users) => users);
export { selectAllUsers, selectUserById };
