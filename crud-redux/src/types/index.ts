import type {
	User,
	UserFormData,
	UserId,
	UserWithId,
} from "@/features/users/types";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserStoreContract {
	users: UserWithId[];

	// Actions
	createUser: (user: User) => void;
	updateUser?: (id: UserId, updates: PayloadAction<User>) => void;
	removeUser: (id: string) => void;
}

export type { User, UserFormData, UserId, UserWithId };
