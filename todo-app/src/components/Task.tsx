import { Check, Trash2, Loader } from 'lucide-react'
import type { TaskWithId } from '@/features/tasks/types'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/store/store'
import {
  removeTask,
  toggleTaskCompleted,
  toggleTaskInProgress,
} from '@/features/tasks/tasksSlice'

export function Task({ title, id, status }: TaskWithId) {
  const dispatch: AppDispatch = useDispatch()
  const handleDeleteTask = () => dispatch(removeTask(id))
  const handleToggleCompleted = () => dispatch(toggleTaskCompleted(id))
  const handleSetInProgress = () => dispatch(toggleTaskInProgress(id))
  return (
    <li
      className={`flex justify-between items-center gap-3 px-4 py-3 rounded-2xl shadow-md transition-all
        ${
          status === 'done'
            ? 'bg-green-100/50'
            : status === 'in-progress'
            ? 'bg-yellow-100/50'
            : 'bg-white/10'
        }
        hover:bg-white/20 hover:scale-[1.01]`}
    >
      {/* Checkbox */}
      <label
        className={`w-8 h-8 flex justify-center items-center cursor-pointer rounded-full border
          transition-all duration-200 
          ${
            status === 'done'
              ? 'bg-green-500 border-green-500'
              : status === 'in-progress'
              ? 'bg-yellow-500 border-yellow-500'
              : 'border-gray-500 hover:border-green-500'
          }`}
      >
        {status === 'done' && <Check size={20} color='#fff' />}
        {status === 'in-progress' && <Loader size={20} color='#fff' />}
        <input
          onChange={handleToggleCompleted}
          type='checkbox'
          name='completed'
          checked={status === 'done'}
          className='hidden'
        />
      </label>

      {/* Task title */}
      <h2
        className={`flex-1 font-semibold text-lg break-words transition-colors
          ${
            status === 'done'
              ? 'line-through text-gray-500'
              : status === 'in-progress'
              ? 'text-yellow-700'
              : 'text-black'
          }`}
      >
        {title}
      </h2>

      {/* In Progress button */}
      <button
        onClick={handleSetInProgress}
        aria-label='Set in Progress'
        className='rounded-full hover:bg-yellow-5s00 transition-colors'
      >
        <Loader
          size={30}
          className='text-yellow-500 bg-yellow-300/50 rounded-2xl p-1'
        />
      </button>

      {/* Delete button */}
      <button
        onClick={handleDeleteTask}
        aria-label='Delete task'
        className='p-2 rounded-full hover:bg-red-500/20 transition-colors'
      >
        <Trash2 size={20} className='text-red-500' />
      </button>
    </li>
  )
}
