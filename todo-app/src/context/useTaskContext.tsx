import type { useTasks } from '@/hook/useTasks'
import { createContext, useContext } from 'react'
type TaskContextType = ReturnType<typeof useTasks>
export const TaskContext = createContext<TaskContextType | null>(null)
export function useTaskContext() {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error(
      'The useTaskContext must be used within of TaskContext Provider'
    )
  }
  return context
}
