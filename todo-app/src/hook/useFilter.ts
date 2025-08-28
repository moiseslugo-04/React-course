import { useState, useMemo } from 'react'
import type { FilterType, TaskType } from '@/types'

export function useFilter({ tasks }: { tasks: TaskType[] }) {
  const [filter, setFilter] = useState<FilterType>('all')
  const filteredTask = useMemo(() => {
    return tasks.filter((task) => {
      if (
        filter === 'all' ||
        (filter === 'completed' && task.completed) ||
        (filter === 'pending' && !task.completed)
      ) {
        return task
      }
    })
  }, [tasks, filter])
  const handleSetFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value
    setFilter(value as FilterType)
  }
  return { filteredTask, handleSetFilter }
}
