import { useSelector } from "@/store/hooks";
import type { AppDispatch } from "@/store/store";
import type { User, UserId, UserStoreContract } from "@/types";
import { useDispatch } from "react-redux";
import { selectAllUsers, selectUserById } from "../selectors";
import type { UpdateUserPayload } from "../types";
import { addToUser, removeFromUser, updateFromUser } from "../userSlice";
export function useUser(): UserStoreContract {
	const dispatch: AppDispatch = useDispatch();
	//Selectors
	const users = useSelector((state) => selectAllUsers(state));
	const selectUser = (id: UserId) =>
		useSelector((state) => selectUserById(state, id));

	// actions
	const removeUser = (id: UserId) => dispatch(removeFromUser(id));
	const createUser = (user: User) => dispatch(addToUser(user));
	const updateUser = (updates: UpdateUserPayload) =>
		dispatch(updateFromUser(updates));
	return { users, removeUser, createUser, selectUser, updateUser };
}
