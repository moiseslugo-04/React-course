import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useUser } from "../hooks/useUsers";

export function CreateNewUser() {
	const { createUser } = useUser();
	const [result, setResult] = useState<"ok" | "ko" | null>(null);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setResult(null);
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("github") as string;

		if (!name || !email || !github) {
			return setResult("ko");
		}

		createUser({ name, email, github });
		setResult("ok");
		form.reset();
	};

	return (
		<div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
			<h1 className="text-2xl font-bold mb-6 text-center">Create New User</h1>

			<form onSubmit={handleSubmit} className="space-y-4">
				<input
					name="name"
					placeholder="Name"
					className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
				/>
				<input
					name="email"
					placeholder="Email"
					className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
				/>
				<input
					name="github"
					placeholder="GitHub Username"
					className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
				/>

				<div className="flex items-center justify-between mt-4">
					<Button
						type="submit"
						className="bg-blue-500 hover:bg-blue-600 text-white"
					>
						Create User
					</Button>
					{result && (
						<span
							className={`font-medium ${
								result === "ok" ? "text-green-600" : "text-red-600"
							}`}
						>
							{result === "ok"
								? "Saved successfully!"
								: "Please fill all fields!"}
						</span>
					)}
				</div>
			</form>
		</div>
	);
}
