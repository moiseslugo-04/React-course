import type {
	UpdateUserPayload,
	User,
	UserFormData,
	UserId,
	UserWithId,
} from "@/features/users/types";

export interface UserStoreContract {
	users: UserWithId[];
	selectUser: (id: UserId) => void;
	createUser: (user: User) => void;
	updateUser?: (updates: UpdateUserPayload) => void;
	removeUser: (id: string) => void;
}

export type { User, UserFormData, UserId, UserWithId };
