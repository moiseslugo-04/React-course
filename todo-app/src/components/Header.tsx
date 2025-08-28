import type React from 'react'
import { useTaskContext } from '@/context/useTaskContext'
export function Header({
  handleSetFilter,
}: {
  handleSetFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void
}) {
  const { addTask } = useTaskContext()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { task } = Object.fromEntries(new FormData(event.currentTarget))
    addTask({ title: task as string })
    event.currentTarget.reset()
  }
  return (
    <header className='flex flex-col gap-2 items-center justify-center text-white '>
      <h1 className='text-2xl font-bold mb-5'>Todo App</h1>
      <form
        className='flex gap-2 justify-center items-center'
        onSubmit={handleSubmit}
      >
        <label>
          <input
            type='text'
            placeholder='Add your task here'
            name='task'
            className='w-70  p-2 rounded-2xl bg-gray-500/50 placeholder:text-gray-900   '
          />
        </label>
        <button className='px-4 py-2 bg-orange-400 rounded-2xl'>Add</button>
      </form>
      <label className='bg-blue-300/50 p-3 rounded-sm'>
        Filter By
        <select
          name='category'
          onChange={handleSetFilter}
          className='text-black'
        >
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='pending'>Pending</option>
        </select>
      </label>
    </header>
  )
}
