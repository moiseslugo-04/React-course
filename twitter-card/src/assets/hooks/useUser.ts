import { useState, useEffect } from 'react'
import type { UserProps } from '../../types'
export function useUser() {
  const [users, setUsers] = useState<[] | UserProps[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<null | string>(null)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/src/mocks/dataUser.json')
        if (!response.ok) throw new Error('Failed to fetch')
        setUsers(await response.json())
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown Error')
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])
  const toggleFollow = (id: string) => {
    const userIndex = users.findIndex((user) => user.id === id)
    if (userIndex !== -1) {
      const newUsers = [...users]
      newUsers[userIndex].isFollow = !users[userIndex].isFollow
      setUsers(newUsers)
    }
  }
  return { users, loading, error, toggleFollow }
}
