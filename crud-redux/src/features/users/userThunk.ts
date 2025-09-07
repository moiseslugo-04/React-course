import { createAsyncThunk } from "@reduxjs/toolkit";
import type { UserFromDB, UserWithId } from "./types";
const fetchUsers = createAsyncThunk<
	UserWithId[],
	void,
	{ rejectValue: string }
>("users/fetchUsers", async (_, { rejectWithValue }) => {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/users");
		if (!response.ok) {
			const err = await response.text();
			return rejectWithValue(err || "Error getting the users");
		}

		const data = await response.json();
		return data.map(({ name, email, username, id }: UserFromDB) => ({
			id,
			name,
			email,
			github: username,
		}));
	} catch (error) {
		return rejectWithValue(
			error instanceof Error ? error.message : "Unknown Error",
		);
	}
});

export { fetchUsers };
