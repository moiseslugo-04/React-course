const saveStorage = (key: string, data: string) => {
  localStorage.setItem(key, data)
}
const deleteFromLocal = (key: string) => localStorage.removeItem(key)
const getFromLocal = (key: string) => localStorage.getItem(key)
export { saveStorage, deleteFromLocal, getFromLocal }
