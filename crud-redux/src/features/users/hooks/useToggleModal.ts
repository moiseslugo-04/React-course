import { useState } from "react";

export function useToggleModal() {
	const [isOpen, setIsOpen] = useState(false);
	const toggleModal = () => setIsOpen(!isOpen);
	return { isOpen, toggleModal };
}
