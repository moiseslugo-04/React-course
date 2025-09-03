import { TaskList } from './components/TaskList'
import { Header } from './components/Header'
import { TaskContext } from './context/useTaskContext'
import { useTasks } from './hook/useTasks'
import { useFilter } from './hook/useFilter'
function App() {
  const tasks = useTasks()
  const { handleSetFilter, filteredTask } = useFilter({ tasks: tasks.state })
  return (
    <div className='w-vw min-h-dvh flex flex-col  items-center gap-4 bg-gradient-to-r from-blue-950  to-purple-950 p-4 '>
      <TaskContext value={tasks}>
        <Header handleSetFilter={handleSetFilter} />
        <main className='container bg-white rounded-lg p-2 '>
          <TaskList tasks={filteredTask} />
        </main>
      </TaskContext>
    </div>
  )
}

export default App
