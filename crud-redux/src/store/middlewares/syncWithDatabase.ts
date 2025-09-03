import { rollbackUser } from "@/features/users/slice";
import type { UserId, UserWithId } from "@/features/users/types";
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
	if (type === "users/deleteUserById") {
		// <- eliminado un usuario
		const userIdToRemove = payload;
		const userToRemove = previousState.users.find(
			(user) => user.id === userIdToRemove,
		);
		fetch(`https://jsonplacehole.com/users/${userIdToRemove}`, {
			method: "DELETE",
		})
			.then(() => {
				// if (res.ok) {
				// 	toast.success(`Usuario ${payload} eliminado correctamente`)
				// }
				throw new Error("Error al eliminar el usuario");
			})
			.catch((err) => {
				toast.error(`Error deleting user ${userIdToRemove}`);
				if (userToRemove) store.dispatch(rollbackUser(userToRemove));
				console.log(err);
				console.log("error");
			});
	}
};
