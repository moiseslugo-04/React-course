import type React from 'react'
import { useState } from 'react'
import { ManagerForm, type FormDataType } from './ManagerForm'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/store/store'
import { addUser } from '@/features/users/userSlice'
import { addTask } from '@/features/tasks/tasksSlice'
export function Header({
  handleSetFilter,
}: {
  handleSetFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void
}) {
  const [formMode, setFormMode] = useState<'tasks' | 'users'>('tasks')
  const toggleMode = () =>
    setFormMode((prev) => (prev === 'tasks' ? 'users' : 'tasks'))
  const dispatch: AppDispatch = useDispatch()
  const handleSubmit = (data: FormDataType) => {
    if (formMode === 'tasks') {
      const title = data.title
      const member = data.member
      dispatch(
        addTask({
          title,
          description: '',
          assignedTo: member,
          status: 'pending',
        })
      )
    } else if (formMode === 'users') {
      const name = data.name
      const email = data.email
      dispatch(addUser({ name, email }))
    }
  }
  return (
    <header className='flex flex-col gap-6 items-center justify-center text-white bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 rounded-2xl shadow-xl'>
      <h1 className='text-3xl md:text-4xl font-extrabold tracking-wide text-center'>
        Team Task Manager
      </h1>
      <ManagerForm
        mode={formMode}
        onSubmit={handleSubmit}
        toggleMode={toggleMode}
      />

      {/* Filter */}
      <label className='flex flex-col md:flex-row gap-2 items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg'>
        <span className='text-sm font-medium'>Filter by:</span>
        <select
          name='category'
          onChange={handleSetFilter}
          className='p-2 rounded-xl bg-white/80 text-black outline-none focus:ring-2 focus:ring-orange-400'
        >
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='pending'>Pending</option>
        </select>
      </label>
    </header>
  )
}
