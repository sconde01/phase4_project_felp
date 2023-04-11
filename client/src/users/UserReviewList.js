import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { FoodTruckContext } from '../Context/FoodTruckContext';
import { UserContext } from '../Context/UserContext';

export const UserReviewList = () => {
  const { currentUser } = useContext(UserContext);
  const { deleteFoodTruckReview } = useContext(FoodTruckContext);

  const handleDelete = (review) => {
    fetch(`/reviews/${review.id}`, {
      method: "DELETE",
    })
    .then(() => 
    deleteFoodTruckReview(review))
    // console.log(review);
  }
  //debugger

  //I want to render current users reviews with the buttons that allow them to edit or delete them
  const user_review = currentUser?.reviews.map (review => (
    <li key={review.id}>
      {review.review} 
    <Link to={`/reviews/${review.id}/edit`}> Edit </Link>   |   
    <Link to="#" onClick= {() => {handleDelete(review)}}>Delete</Link>
    {/* <button onClick={handleDelete}>Delete</button> */}
   </li>
  ))
  // console.log(user_review)
  //debugger
  
  return (
    <div>Here are your reviews:
      <p> {user_review} </p>
      <br/>
    </div>
  )
}
