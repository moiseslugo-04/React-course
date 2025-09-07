import type { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";
import type { User, UserId, UserWithId } from "../types";
import { addUser, removeUser, updateUser } from "../userSlice";
export function useUsers() {
	const dispatch: AppDispatch = useDispatch();
	//actions
	const createUser = (user: User) => dispatch(addUser(user));
	const updateUserFrom = (user: UserWithId) => dispatch(updateUser(user));
	const removeUserFom = (userId: UserId) => dispatch(removeUser(userId));
	return { createUser, updateUserFrom, removeUserFom };
}
