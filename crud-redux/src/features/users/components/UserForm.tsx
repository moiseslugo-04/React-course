import { Button } from "@/components/ui/button";
import type { resultType } from "../types";

interface UserFormProps {
	defaultValues?: {
		name?: string;
		email?: string;
		github?: string;
	};
	result: resultType;
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	submitText: string;
	onCancel?: () => void;
}
export function UserForm({
	defaultValues,
	result,
	onSubmit,
	submitText,
	onCancel,
}: UserFormProps) {
	return (
		<form onSubmit={onSubmit} className="space-y-4">
			<input
				name="name"
				placeholder="Name"
				defaultValue={defaultValues?.name}
				className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
			/>
			<input
				name="email"
				placeholder="Email"
				defaultValue={defaultValues?.email}
				className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
			/>
			<input
				name="github"
				placeholder="GitHub Username"
				defaultValue={defaultValues?.github}
				className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
			/>

			<div className="flex items-center justify-between mt-4">
				{onCancel && (
					<Button type="button" variant="outline" onClick={onCancel}>
						Cancel
					</Button>
				)}
				<Button
					type="submit"
					className="bg-blue-500 hover:bg-blue-600 text-white"
				>
					{submitText}
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
	);
}
