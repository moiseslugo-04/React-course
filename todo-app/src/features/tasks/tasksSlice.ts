import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { TaskId, TaskType, TaskWithId, TasksTypeState } from './types'
import { fakeTasks } from '@/mocks/data'
const initialState: TasksTypeState = {
  tasks: fakeTasks,
  loading: false,
  error: null,
}
const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskType>) => {
      const id = crypto.randomUUID()
      state.tasks.push({ ...action.payload, id })
    },
    updateTask: (state, action: PayloadAction<TaskWithId>) => {
      state.tasks = state.tasks.map((task) => {
        return task.id === action.payload.id ? action.payload : task
      })
    },
    toggleTaskCompleted: (state, action: PayloadAction<TaskId>) => {
      const task = state.tasks.find((t) => t.id === action.payload)
      if (task) {
        task.status = task.status === 'done' ? 'pending' : 'done'
      }
    },
    toggleTaskInProgress: (state, action: PayloadAction<TaskId>) => {
      const task = state.tasks.find((t) => t.id === action.payload)
      if (task) {
        task.status = task.status === 'in-progress' ? 'pending' : 'in-progress'
      }
    },
    removeTask: (state, action: PayloadAction<TaskId>) => {
      state.tasks = state.tasks.filter(({ id }) => id !== action.payload)
    },
  },
})
export default taskSlice.reducer
export const { addTask, updateTask, removeTask } = taskSlice.actions
