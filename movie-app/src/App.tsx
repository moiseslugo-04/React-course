import './App.css'
import { MovieList } from './components/MovieList'
import { useMovies } from './hooks/useMovie'
import { useSearchFrom } from './hooks/useSearchForm'
function App() {
  const { movies, getMovies, handleSort } = useMovies()
  const { error, query, handleSubmit, handleChange } = useSearchFrom({
    getMovies,
  })
  return (
    <div className='app'>
      <header>
        <h1>Movie Search</h1>
        <form onSubmit={handleSubmit}>
          <input name='query' value={query} onChange={handleChange} />
          <button>Search</button>

          <label>
            Sort Movies
            <input type='checkbox' onChange={handleSort} />
          </label>
        </form>

        {error && <span>{error}</span>}
      </header>

      <main className='movie'>
        <MovieList movies={movies} />
      </main>
    </div>
  )
}

export default App
