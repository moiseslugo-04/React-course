import type { movieType } from '../types'
export function Movie({ id, title, year, poster }: movieType) {
  return (
    <li id={id}>
      <h3>{title}</h3>
      <p>{year}</p>
      <img src={poster} alt={`Poster of movie ${title}`} />
    </li>
  )
}
