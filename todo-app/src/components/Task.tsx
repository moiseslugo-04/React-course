import type { TaskType } from '@/types'
import { useTaskContext } from '@/context/useTaskContext'
import { Check } from 'lucide-react'
export function Task({ title, id, completed }: TaskType) {
  const { deleteTask, updateTask } = useTaskContext()
  const handleDeleteTask = () => deleteTask(id)
  const handleToggleCompleted = () => updateTask(id)
  return (
    <li
      key={id}
      className='min-h-18 flex justify-between items-center gap-2 px-3 py-1 rounded-md '
    >
      <label
        className={`
          w-8 h-8 cursor-pointer flex justify-center items-center
          border rounded-[50%] border-gray-800
          ${completed ? 'bg-orange-600 border-0 ' : 'p-3'}`}
      >
        {completed && <Check size={20} color='#fff' />}
        <input
          onChange={handleToggleCompleted}
          className='hidden'
          type='checkbox'
          name='completed'
          checked={completed}
        />
      </label>
      <h2
        className={`font-bold text-center  ${
          completed ? 'line-through text-gray-600' : ''
        }`}
      >
        {title}
      </h2>
      <button
        onClick={handleDeleteTask}
        className='p-0.5 px-2 font-bold text-gray-800   cursor-pointer'
      >
        x
      </button>
    </li>
  )
}
