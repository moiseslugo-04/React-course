import type { TaskType } from '@/types'
import { Task } from './Task'
export function TaskList({ tasks }: { tasks: TaskType[] }) {
  if (tasks.length <= 0)
    return (
      <p className='font-bold text-center py-4'>
        There are no completed or uncompleted Task
      </p>
    )
  return (
    <ul className='flex flex-col gap-2'>
      {tasks?.map((task) => {
        return <Task key={task.id} {...task} />
      })}
    </ul>
  )
}
