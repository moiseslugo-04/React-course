interface TaskType {
  title: string
  id: number
  completed: boolean
}

type TaskStateType = TaskType[]

type ActionTypes =
  | { type: 'GET'; payload: TaskType[] }
  | { type: 'ADD'; payload: TaskType }
  | { type: 'DELETE'; payload: { id: number } }
  | { type: 'UPDATE'; payload: { id: number } }
type FilterType = 'all' | 'pending' | 'completed'

export type { TaskType, FilterType, ActionTypes, TaskStateType }
