export function Header({
  handleSetFilter,
}: {
  handleSetFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void
}) {
  return (
    <header className='flex flex-col gap-2 items-center justify-center'>
      <h1>Todo App</h1>
      <form className='flex gap-2 justify-center items-center'>
        <label>
          <input
            type='text'
            placeholder='Create or looking for a task'
            name='task'
            className='border p-2 rounded-sm'
          />
        </label>
        <button className='px-4 py-3 bg-orange-400 rounded-md'>
          create new Task
        </button>
      </form>
      <label>
        Filter By
        <select name='category' onChange={handleSetFilter}>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='pending'>Pending</option>
        </select>
      </label>
    </header>
  )
}
