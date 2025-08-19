import './App.css'
import { useUser } from './assets/hooks/useUser'
import { FollowCard } from './components/FollowCard'

function App() {
  const { users, loading, toggleFollow } = useUser()
  return (
    <div className='App'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        users.map((user) => (
          <FollowCard
            key={user.id}
            {...user} // destructure or rest operator
            onClick={toggleFollow}
          />
        ))
      )}
    </div>
  )
}

export default App
