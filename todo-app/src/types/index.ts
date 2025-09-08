interface TaskType {
  title: string
  id: number | string
  completed: boolean
}
type LoadingType = boolean
type ErrorType = string | null
type TaskStateType = TaskType[]

type ActionTypes =
  | { type: 'GET'; payload: TaskType[] }
  | { type: 'ADD'; payload: { title: string } }
  | { type: 'DELETE'; payload: { id: number | string } }
  | { type: 'UPDATE'; payload: { id: number | string } }
type FilterType = 'all' | 'pending' | 'completed'

export type {
  TaskType,
  FilterType,
  ActionTypes,
  TaskStateType,
  LoadingType,
  ErrorType,
}
