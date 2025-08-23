import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'
import type { movieType } from '../types'
export function useMovies() {
  const [movies, setMovies] = useState<movieType[] | []>([])
  const [sort, setSort] = useState(false)
  const [loading, setLoading] = useState(false)
  const previousSearch = useRef<string | null>(null)
  const getMovies = useCallback(async ({ query }: { query: string }) => {
    if (!query) return
    if (previousSearch.current === query) return
    previousSearch.current = query
    try {
      setLoading(true)
      console.log(query)
      const newMovies = await searchMovies(query)
      setMovies(newMovies)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [])
  const handleSort = () => {
    setSort((prev) => !prev)
  }

  const sortedMovies = useMemo(() => {
    if (!movies) return []
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [movies, sort])
  return { movies: sortedMovies, loading, getMovies, handleSort }
}
