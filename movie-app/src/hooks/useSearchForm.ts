import { useRef, useState, useCallback } from 'react'
import debounce from 'just-debounce-it'
export function useSearchFrom({
  getMovies,
}: {
  getMovies: ({ query }: { query: string }) => void
}) {
  const [query, setQuery] = useState('')
  const [error, setError] = useState<string | null>(null)
  const isFirstInput = useRef(true)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { query } = Object.fromEntries(new FormData(event.currentTarget))
    if (typeof query !== 'string') return
    if (!error && query.trim().length >= 3) {
      getMovies({ query })
    }
  }
  const debouncedGetMovies = useCallback(
    debounce((search: string) => {
      getMovies({ query: search })
    }, 300),
    [getMovies]
  )
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.currentTarget.value
    setError(null)
    if (isFirstInput.current) {
      isFirstInput.current = false
    }
    if (newQuery.startsWith(' ')) {
      setError('Can not start with space')
      setQuery(newQuery.trim())
      return
    }
    setQuery(newQuery)
    //could valid the data

    if (newQuery.length > 0 && newQuery.length < 3) {
      setError('Must contain at least 3 characters')
      return
    }
    // TODO:add debounce
    if (newQuery.length >= 3 && !error) {
      debouncedGetMovies(newQuery)
    }
  }
  return { query, error, handleSubmit, handleChange }
}
