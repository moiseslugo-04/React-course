import { reducer, initialState } from '@/reducers/task'
import { getTask } from '@/services/todo'
import type { TaskType } from '@/types'
import { saveStorage } from '@/utils/helperStorage'
import { useEffect, useReducer, useState } from 'react'
const API_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=10'

export function useTasks() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [error, setError] = useState<null | string>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getTodoList = async () => {
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
    //this is the short way
    return () => {}
  }, [])

  useEffect(() => {
    saveStorage('tasks', JSON.stringify(state))
  }, [state])
  type ID = number
  const addTask = (task: TaskType) => dispatch({ type: 'ADD', payload: task })
  const deleteTask = (id: ID) => dispatch({ type: 'DELETE', payload: { id } })
  const updateTask = (id: ID) => dispatch({ type: 'UPDATE', payload: { id } })
  return { state, error, loading, addTask, deleteTask, updateTask }
}
