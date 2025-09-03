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

export type { User, UserFormData, UserId, UserWithId };
