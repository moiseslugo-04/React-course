import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@features/users/userSlice'
import tasksReducer from '@features/tasks/tasksSlice'
export const store = configureStore({
  reducer: {
    users: userReducer,
    tasks: tasksReducer,
  },
})
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export type { RootState, AppDispatch }
