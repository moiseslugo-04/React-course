import { useAppSelector } from "@/store/hooks/useStore";
import { useState } from "react";
import type { UserId, UserWithId, resultType } from "../types";
import { selectUserById } from "../userSelectors";
import { useUsers } from "./useUsers";

interface UseUserFormOptions {
	mode: "create" | "update";
	userId?: UserId | null;
	onSuccess?: () => void;
}
export function useUserForm({ mode, userId, onSuccess }: UseUserFormOptions) {
	const { createUser, updateUserFrom } = useUsers();

	const [result, setResult] = useState<resultType>(null);

	const userSelected: UserWithId | null | undefined = useAppSelector((state) =>
		selectUserById(state, userId),
	);
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setResult(null);
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("github") as string;
		const user = { name, email, github };
		if (!name || !email || !github) {
			return setResult("error");
		}
		if (mode === "create") {
			createUser(user);
		} else if (mode === "update" && userId) {
			updateUserFrom({ id: userId, ...user });
		}

		setResult("ok");
		form.reset();
		onSuccess?.();
	};

	setTimeout(() => setResult(null), 3000);

	return { handleSubmit, result, userSelected };
}
