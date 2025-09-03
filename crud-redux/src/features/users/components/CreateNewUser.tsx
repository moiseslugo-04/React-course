import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useUser } from "../hooks/useUser";
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
			// validaciones que tu quieras
			return setResult("ko");
		}
		createUser({ name, email, github });
		setResult("ok");
		form.reset();
	};

	return (
		<>
			<div style={{ marginTop: "16px" }}>
				<h1>Create New User</h1>

				<form onSubmit={handleSubmit} className="">
					<input name="name" placeholder="Aquí el nombre" />
					<input name="email" placeholder="Aquí el email" />
					<input name="github" placeholder="Aquí el usuario de GitHub" />

					<div>
						<Button type="submit">Crear usuario</Button>
						<span>
							{result === "ok" && (
								<div color="green">Guardado correctamente</div>
							)}
							{result === "ko" && <div color="red">Error con los campos</div>}
						</span>
					</div>
				</form>
			</div>
		</>
	);
}
