type UserId = string;
interface User {
	name: string;
	email: string;
	github: string;
}
interface UserWithId extends User {
	id: UserId;
}

interface UserFromDB {
	id: string;
	name: string;
	username: string;
	email: string;
}
interface UsersTypeState {
	users: UserWithId[];
	loading: boolean;
	error: string | null;
}

type resultType = "ok" | "error" | null;
export type {
	resultType,
	User,
	UserFromDB,
	UserId,
	UsersTypeState,
	UserWithId,
};
