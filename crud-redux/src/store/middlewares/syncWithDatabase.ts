import type { UserId, UserWithId } from "@/features/users/types";
import { rollbackUser } from "@/features/users/userSlice";
import type { RootState } from "@/store/store";
import type { Middleware } from "@reduxjs/toolkit";
import { toast } from "sonner";

export const syncWithDatabase: Middleware = (store) => (next) => (action) => {
	const { type, payload } = action as {
		type: string;
		payload: UserWithId | UserId;
	};

	const previousState = store.getState() as RootState;
	next(action);

	if (type === "users/removeFromUser") {
		const userIdToRemove = payload as UserId;
		const userToRemove = previousState.users.find(
			(user) => user.id === userIdToRemove,
		);

		// Simulate failure for user with ID "2" (change this as needed)
		const shouldFail = userIdToRemove === "2";

		fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, {
			method: "DELETE",
		})
			.then((res) => {
				if (shouldFail || !res.ok) {
					throw new Error("Simulated error or real error deleting user");
				} else {
					toast.success(`User ${userIdToRemove} deleted successfully`);
				}
			})
			.catch((err) => {
				toast.error(`Error deleting user ${userIdToRemove}`);
				if (userToRemove) store.dispatch(rollbackUser(userToRemove));
				console.error(err);
			});
	}
};
