import { type User, SortBy } from '../types'
interface UsersProps {
  users: User[]
  showColor: boolean
  deleteUser: (id: string) => void
  changeSort: (sort: SortBy) => void
}

export function UserLists({
  users,
  showColor,
  deleteUser,
  changeSort,
}: UsersProps) {
  return (
    <table width='100%'>
      <thead>
        <th>Picture</th>
        <th
          style={{ cursor: 'pointer' }}
          onClick={() => changeSort(SortBy.NAME)}
        >
          Name
        </th>
        <th
          style={{ cursor: 'pointer' }}
          onClick={() => changeSort(SortBy.LAST)}
        >
          Last Name
        </th>
        <th
          style={{ cursor: 'pointer' }}
          onClick={() => changeSort(SortBy.COUNTRY)}
        >
          {' '}
          Country
        </th>
        <th>Actions</th>
      </thead>
      <tbody>
        {users.map((user, index) => {
          const bgColor = index % 2 === 0 ? '#333' : '#555'
          const color = showColor ? bgColor : 'transparent'
          return (
            <tr key={user.login.uuid} style={{ backgroundColor: color }}>
              <td>
                <img
                  src={user.picture.thumbnail}
                  alt={`avatar of user ${user.name.first}`}
                />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button onClick={() => deleteUser(user.login.uuid)}>
                  Delete
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
