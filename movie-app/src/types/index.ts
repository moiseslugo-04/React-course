interface movieType {
  id: string
  title: string
  year: number
  poster: string
}

interface omdbMovie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}
export type { movieType, omdbMovie }
