import type { UserId } from '@/features/users/types'
import { useSelector } from '@/hook/useSelectors'
import React, { useState, useEffect } from 'react'

export interface FormDataType {
  member: UserId
  title: string
  name: string
  email: string
}
interface ManagerFormProps {
  mode: 'tasks' | 'users'
  onSubmit: (data: FormDataType) => void
  toggleMode: () => void
}

export function ManagerForm({ mode, onSubmit, toggleMode }: ManagerFormProps) {
  const members = useSelector((state) => state.users.users)

  const [formData, setFormData] = useState({
    member: members[0]?.id || '',
    title: '',
    name: '',
    email: '',
  })

  useEffect(() => {
    setFormData({
      member: members[0]?.id || '',
      title: '',
      name: '',
      email: '',
    })
  }, [mode, members])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(formData)
    setFormData({
      member: members[0]?.id || '',
      title: '',
      name: '',
      email: '',
    })
  }

  return (
    <form
      className='flex flex-col md:flex-row gap-4 w-full max-w-2xl justify-center items-center bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-lg'
      onSubmit={handleSubmit}
    >
      {mode === 'tasks' ? (
        <>
          <label className='flex flex-col gap-2 w-full md:w-1/3'>
            <span className='text-sm font-medium'>Select a team member:</span>
            <select
              name='member'
              value={formData.member}
              onChange={handleChange}
              className='p-2 rounded-xl bg-white/80 text-black outline-none focus:ring-2 focus:ring-orange-400'
            >
              {members.map((member) => (
                <option key={member.id} value={member.id}>
                  {member.name}
                </option>
              ))}
            </select>
          </label>

          <label className='flex flex-col gap-2 w-full md:w-1/3'>
            <span className='text-sm font-medium'>Title Task</span>
            <input
              type='text'
              placeholder='Add your task here'
              name='title'
              value={formData.title}
              onChange={handleChange}
              className='p-2 rounded-xl bg-white/80 text-black placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-orange-400'
            />
          </label>
        </>
      ) : (
        <>
          <label className='flex flex-col gap-2 w-full md:w-1/3'>
            <span className='text-sm font-medium'>Name</span>
            <input
              type='text'
              placeholder='Mark, Lucas...'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='p-2 rounded-xl bg-white/80 text-black placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-orange-400'
            />
          </label>

          <label className='flex flex-col gap-2 w-full md:w-1/3'>
            <span className='text-sm font-medium'>Email</span>
            <input
              type='text'
              placeholder='example@gmail.com'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='p-2 rounded-xl bg-white/80 text-black placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-orange-400'
            />
          </label>
        </>
      )}

      <div className='flex gap-3 w-full md:w-auto justify-center'>
        <button
          onClick={toggleMode}
          type='button'
          className='px-4 py-2 bg-white text-black rounded-xl font-medium shadow hover:bg-gray-200 transition'
        >
          {mode === 'tasks' ? 'create new User' : 'create new Task'}
        </button>
        <button
          type='submit'
          className='px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-xl font-medium shadow transition'
        >
          {mode === 'tasks' ? 'Add' : 'Create'}
        </button>
      </div>
    </form>
  )
}
