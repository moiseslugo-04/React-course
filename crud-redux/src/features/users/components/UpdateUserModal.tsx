import { X } from "lucide-react";
import { toast } from "sonner";
import { useUserForm } from "../hooks/useUsersForm";
import type { UserId } from "../types";
import { UserForm } from "./UserForm";
interface UpdateUserModalProps {
	userId: UserId | null;
	isOpen: boolean;
	setIsOpen: () => void;
}
export function UpdateUserModal({
	userId,
	isOpen,
	setIsOpen,
}: UpdateUserModalProps) {
	const {
		handleSubmit: onSubmit,
		userSelected,
		result,
	} = useUserForm({
		mode: "update",
		userId,
	});
	if (!userSelected) return;

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		onSubmit(event);
		setIsOpen();
		toast.success("User Update with success");
	};
	return (
		<>
			{isOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
					{/* Modal Container */}
					<div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative transform transition-all duration-300 scale-100 opacity-100">
						{/* Close Button */}
						<button
							type="button"
							className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
							onClick={setIsOpen}
						>
							<X size={20} />
						</button>

						{/* Modal Title */}
						<h1 className="text-2xl font-bold mb-6 text-center">Update User</h1>

						{/* Form */}
						<UserForm
							submitText="Update user"
							defaultValues={userSelected}
							onSubmit={handleSubmit}
							result={result}
							onCancel={setIsOpen}
						/>
					</div>
				</div>
			)}
		</>
	);
}
