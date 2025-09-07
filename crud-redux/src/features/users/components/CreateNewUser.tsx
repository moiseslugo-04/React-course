import { useUserForm } from "../hooks/useUsersForm";
import { UserForm } from "./UserForm";

export function CreateNewUser() {
	const { result, handleSubmit } = useUserForm({ mode: "create" });
	return (
		<div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
			<h1 className="text-2xl font-bold mb-6 text-center">Create New User</h1>

			<UserForm
				onSubmit={handleSubmit}
				submitText="Create user"
				result={result}
			/>
		</div>
	);
}
