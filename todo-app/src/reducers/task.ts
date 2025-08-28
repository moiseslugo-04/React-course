import type { ActionTypes, TaskStateType } from '@/types'
import { v4 as uuidv4 } from 'uuid'

const initialState: TaskStateType = []
function reducer(state: TaskStateType, action: ActionTypes) {
  switch (action.type) {
    case 'GET':
      return [...action.payload]
    case 'ADD': {
      const newTask = {
        title: action.payload.title,
        id: uuidv4(),
        completed: false,
      }

      return [...state, newTask]
    }
    case 'DELETE': {
      const taskIndex = state.findIndex((task) => task.id === action.payload.id)
      if (taskIndex >= 0) {
        //here is most simple use the filter XD
        return [...state.slice(0, taskIndex), ...state.slice(taskIndex + 1)]
      }
      return state
    }

    case 'UPDATE': {
      const taskIndex = state.findIndex((task) => task.id === action.payload.id)
      if (taskIndex >= 0) {
        const newState = state.map((task) => {
          if (task.id === action.payload.id) {
            return { ...task, completed: !task.completed }
          }
          return task
        })
        return newState
      }
      return state
    }
    default:
      return state
  }
}
export { initialState, reducer }
