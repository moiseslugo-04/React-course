import type { omdbMovie } from '../types'

const API_KEY = '6ff73c96'
const END_POINT = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`
export async function searchMovies(query: string) {
  try {
    const response = await fetch(`${END_POINT}${query}`)
    if (!response.ok) throw new Error('Error Getting the movie')
    const { Search } = (await response.json()) as { Search?: omdbMovie[] }
    console.log(Search)
    return Search?.map((movie: omdbMovie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }))
  } catch (error) {
    console.error(error)
    throw error
  }
}
