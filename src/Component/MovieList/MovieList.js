import React from 'react'
import { MovieCard } from '../MovieCard/MovieCard'

const MovieList = ({movieList}) => {
  return (
    <div>{movieList.map(el=><MovieCard key={el.id} el={el}/>)}</div>
  )
}

export default MovieList