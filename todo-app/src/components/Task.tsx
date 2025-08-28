import type { TaskType } from '@/types'
import { useTaskContext } from '@/context/useTaskContext'

export function Task({ title, id, completed }: TaskType) {
  const { deleteTask, updateTask } = useTaskContext()
  const handleDeleteTask = () => deleteTask(id)
  const handleToggleCompleted = () => updateTask(id)
  return (
    <li
      key={id}
      className='
                  min-h-18
                flex justify-between items-center gap-2 bg-blue-200/60 px-3 py-1 rounded-md '
    >
      <label
        className={`
                  cursor-pointer
                      p-4 flex justify-center items-center border rounded-[50%] 
                    border-gray-500
                    ${completed ? 'bg-orange-600' : 'bg-white'}`}
      >
        <input
          onChange={handleToggleCompleted}
          className='hidden'
          type='checkbox'
          name='completed'
          checked={completed}
        />
      </label>
      <h2 className='font-bold text-center'>{title}</h2>
      <button
        onClick={handleDeleteTask}
        className='p-0.5 px-2 bg-red-400 rounded-[50%] flex justify-center items-center
                  cursor-pointer 
                  hover:bg-red-500 duration-200 ease-in '
      >
        X
      </button>
    </li>
  )
}
