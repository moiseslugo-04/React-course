function saveStorage<T>(key: string, data: T) {
	const parseData = JSON.stringify(data);
	localStorage.setItem(key, parseData);
	return "data storage with success";
}
function getFromStorage<T>(key: string, fallback: T): T {
	try {
		const stored = localStorage.getItem(key);
		return stored ? (JSON.parse(stored) as T) : fallback;
	} catch {
		return fallback;
	}
}

function removeFromStorage(key: string) {
	localStorage.removeItem(key);
}
export { getFromStorage, removeFromStorage, saveStorage };
