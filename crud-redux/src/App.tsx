import { Toaster } from "sonner";
import "./App.css";
import { CreateNewUser } from "./features/users/components/CreateNewUser";
import { ListOfUsers } from "./features/users/components/ListOfUsers";
function App() {
	return (
		<>
			<ListOfUsers />
			<CreateNewUser />
			<Toaster richColors />
		</>
	);
}

export default App;
