interface User {
	name: string;
	email: string;
	github: String;
}
type UserId = string;
interface UserWithId extends User {
	id: UserId;
}
type UserFormData = {
	name: string;
	email: string;
	github: string;
};

interface UpdateUserPayload {
	id: UserId;
	updates: Partial<User>;
}
export type { UpdateUserPayload, User, UserFormData, UserId, UserWithId };
