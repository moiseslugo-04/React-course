import { TaskList } from './components/TaskList'
import { Header } from './components/Header'
import { useSelector } from '@/hook/useSelectors'
function App() {
  const tasks = useSelector((state) => state.tasks.tasks)
  return (
    <div
      className='w-vw min-h-dvh 
    flex flex-col  items-center gap-4 bg-gradient-to-r from-blue-950  to-purple-950 p-4 '
    >
      <Header handleSetFilter={() => {}} />
      <main className='container bg-white rounded-lg p-2 '>
        <TaskList tasks={tasks} />
      </main>
    </div>
  )
}

export default App
