import React from 'react'

export const Reviews = ({ review }) => {

  return (
   <div> 
    <p> {review.user.username}</p>
    {/* make these card texts */}
    <p> {review.review} </p>
   </div> 
  )
}

