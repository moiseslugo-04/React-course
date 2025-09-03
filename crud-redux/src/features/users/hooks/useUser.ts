import type { AppDispatch, RootState } from "@/store/store";
import type { User, UserId, UserStoreContract } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "../slice";
export function useUser(): UserStoreContract {
	const { users } = useSelector((state: RootState) => state);
	const dispatch: AppDispatch = useDispatch();
	const removeUser = (id: UserId) => {
		dispatch(deleteUser(id));
	};
	const createUser = (user: User) => {
		dispatch(addUser(user));
	};
	return { users, removeUser, createUser };
}
