import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FoodTruckContext } from '../Context/FoodTruckContext';
import { UserContext } from '../Context/UserContext';
import Card from 'react-bootstrap/Card';

export const UserReviewList = () => {
  const { currentUser, deleteUserFoodTruckReview } = useContext(UserContext);
  const { deleteFoodTruckReview } = useContext(FoodTruckContext);
  const navigate = useNavigate();

  console.log("current user in UserReviewList", currentUser);

  const handleDelete = (review) => {
    fetch(`/reviews/${review.id}`, {
      method: "DELETE",
    })
    .then(() => {
    deleteFoodTruckReview(review)
    deleteUserFoodTruckReview(review)
    navigate('/food_trucks')
  })
    // console.log(review);
  }
  //debugger

  //I want to render current users reviews with the links that allow them to edit or delete them
  const user_reviews = currentUser?.reviews.map (review => (
    <div key={review.id}> 
      <Card className= "userreviewlist" style={{ width: '20rem'}}>
      <Card.Body>
      <Card.Title>{review.food_truck_name}</Card.Title>

        {/* This renders current user's review */}
        <Card.Text>{review.review}</Card.Text> 

        {/* This renders date of review or updated review */}
        <Card.Text>{new Date(Date.parse(review.created_at)).toLocaleDateString('en-US')}</Card.Text> 

        {/* This link routes user to edit form */}
        <Link to={`/reviews/${review.id}/edit`}> Edit </Link> 
        <br/>
        
        <Link to="#" onClick= {() => {handleDelete(review)}}>Delete</Link>
        {/* <button onClick={handleDelete}>Delete</button> */}
        </Card.Body>
      </Card>
    </div>
  ))
  //console.log(user_review)

  return (
    <div>
      <center><h4>Your reviews:</h4></center>
      <br/>
      {/* ternary conditional operator not persisting on page */}
     <h1> {user_reviews ? user_reviews : "you have no reviews"} </h1> 

    </div>
  )
}
