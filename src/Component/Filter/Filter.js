import React from 'react'
import Stars from "react-rating-stars-component"

export const Filter = ({setFilterByName,setFilterByRate}) => {
  const ratingChanged = (newRating) =>{
    setFilterByRate(newRating)
  }
  return (
    <div><input onChange={(e)=> setFilterByName(e.target.value)} type="text" placeholder='search by title' />
     <Stars onChange={ ratingChanged}  count={10} />
     </div>
  )
}
export default Filter
