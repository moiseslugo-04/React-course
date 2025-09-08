import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { User, UserTypedState, UserWithId, UserId } from './types'
import { fakeUsers } from '@/mocks/data'
const initialState: UserTypedState = {
  users: fakeUsers,
  loading: false,
  error: null,
}
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID()
      state.users.push({ ...action.payload, id })
    },
    updateUser: (state, action: PayloadAction<UserWithId>) => {
      state.users = state.users.map((user) => {
        return user.id === action.payload.id ? action.payload : user
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
    removeUser: (state, action: PayloadAction<UserId>) => {
      state.users = state.users.filter(({ id }) => id !== action.payload)
    },
  },
})

export default userSlice.reducer
export const { addUser } = userSlice.actions
