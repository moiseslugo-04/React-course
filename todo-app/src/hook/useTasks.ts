import { reducer, initialState } from '@/reducers/task'
import { getTask } from '@/services/todo'
import { saveStorage } from '@/utils/helperStorage'
import { useEffect, useReducer, useState } from 'react'
const API_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=10'
const initializer = () => {
  const stored = localStorage.getItem('tasks')
  return stored ? JSON.parse(stored) : initialState
}
export function useTasks() {
  const [state, dispatch] = useReducer(reducer, initialState, initializer)
  const [error, setError] = useState<null | string>(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getTodoList = async () => {
      if (state.length > 0) return
      setLoading(true)
      try {
        const result = await getTask(API_URL)
        dispatch({ type: 'GET', payload: result })
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown Error'
        setError(message)
      } finally {
        setLoading(false)
      }
    }
    getTodoList()
    return () => {}
  }, [state])

  useEffect(() => {
    saveStorage('tasks', JSON.stringify(state))
  }, [state])
  const addTask = ({ title }: { title: string }) =>
    dispatch({ type: 'ADD', payload: { title } })
  const deleteTask = (id: number | string) =>
    dispatch({ type: 'DELETE', payload: { id } })
  const updateTask = (id: number | string) =>
    dispatch({ type: 'UPDATE', payload: { id } })
  return { state, error, loading, addTask, deleteTask, updateTask }
}
