import { useEffect, useState, useRef, useMemo } from 'react'
import { UserLists } from './components/UserLists'
import { type User, SortBy } from './types'
import { fetchUsers } from './services/users'
import './App.css'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColor, setShowColor] = useState(true)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [filterByCountry, setFilterByCountry] = useState<string | null>(null)
  const originalUsers = useRef<User[]>([])
  const handleDelete = (id: string) => {
    setUsers((prev) => prev.filter(({ login }) => login.uuid !== id))
  }
  const handleRestore = () => setUsers(originalUsers.current)

  const filterUsers = useMemo(() => {
    return typeof filterByCountry === 'string' && filterByCountry.length > 0
      ? users.filter(({ location }) => {
          return location.country
            .toLowerCase()
            .includes(filterByCountry.toLowerCase())
        })
      : users
  }, [filterByCountry, users])
  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort)
  }
  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.NONE) return filterUsers

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const compareProperties: Record<string, (user: User) => any> = {
      [SortBy.COUNTRY]: (user) => user.location.country,
      [SortBy.NAME]: (user) => user.name.first,
      [SortBy.LAST]: (user) => user.name.last,
    }
    return filterUsers.toSorted((a, b) => {
      const extractProperty = compareProperties[sorting]
      return extractProperty(a).localeCompare(extractProperty(b))
    })
  }, [sorting, filterUsers])

  useEffect(() => {
    fetchUsers().then(({ users }) => {
      originalUsers.current = users
      setUsers(users)
    })
  }, [])
  return (
    <div className='App'>
      <h1>Test</h1>
      <header>
        <button onClick={() => setShowColor(!showColor)}>Color Rows</button>
        <button
          onClick={() =>
            setSorting((prev) =>
              prev === SortBy.COUNTRY ? SortBy.NONE : SortBy.COUNTRY
            )
          }
        >
          Sort by Country
        </button>
        <button onClick={handleRestore}>Restore User</button>
        <input
          type='text'
          placeholder='filter by country'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFilterByCountry(e.currentTarget.value)
          }}
        />
      </header>
      <main>
        {users.length > 0 && (
          <UserLists
            deleteUser={handleDelete}
            users={sortedUsers}
            showColor={showColor}
            changeSort={handleChangeSort}
          />
        )}
      </main>
    </div>
  )
}

export default App
