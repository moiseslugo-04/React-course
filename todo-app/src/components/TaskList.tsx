import { Task } from './Task'
import type { TaskWithId } from '@/features/tasks/types'

export function TaskList({ tasks }: { tasks: TaskWithId[] }) {
  if (tasks.length <= 0)
    return (
      <p className='font-bold text-center py-6 text-gray-400'>
        There are no tasks yet.
      </p>
    )

  return (
    <ul className='flex flex-col gap-3 w-full max-w-2xl mx-auto'>
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </ul>
  )
}
