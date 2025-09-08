import type { ErrorType, LoadingType } from '@/types'
import type { UserId } from '../users/types'

type TaskStatus = 'done' | 'pending' | 'in-progress'
type TaskId = string

interface TaskType {
  title: string
  description: string
  assignedTo: UserId
  status: TaskStatus
}
interface TaskWithId extends TaskType {
  id: TaskId
}
interface TasksTypeState {
  tasks: TaskWithId[]
  loading: LoadingType
  error: ErrorType
}

export type { TaskStatus, TaskType, TasksTypeState, TaskWithId, TaskId }
