import type { movieType } from '../types'
import { Movie } from './Movie'

export function MovieList({ movies }: { movies: movieType[] }) {
  const hasMovies = movies.length > 0
  return (
    <ul>
      {hasMovies ? (
        movies.map((movie: movieType) => {
          return <Movie key={movie.id} {...movie} />
        })
      ) : (
        <p>Not Result</p>
      )}
    </ul>
  )
}
