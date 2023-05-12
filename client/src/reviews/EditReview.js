import { Form, Button } from 'react-bootstrap';
import React, {useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FoodTruckContext } from '../Context/FoodTruckContext';
import { UserContext } from '../Context/UserContext';

export const EditReview = () => {
  const { currentUser, updateUserFoodTruckReview } = useContext(UserContext);
  const { editFoodTruckReview } = useContext(FoodTruckContext);
  const { id } = useParams();
  
  const review = currentUser.reviews?.find(review => review.id === parseInt(id));
  //console.log('review', review)

  const initialState = {
    review: review.review
  }
  const [ formData, setFormData ] = useState(initialState);
  const navigate = useNavigate();
  
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    fetch(`/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(data => {
        editFoodTruckReview(data)
        updateUserFoodTruckReview(data)
        navigate('/food_trucks')
      })
  }

  return (
    
    <Form className="EditReviewForm" onSubmit={ handleSubmit }>

      <Form.Group className="mb-3" controlId="formBasicEmail">
       <h3>Edit Review for <b> { review.food_truck_name }</b> </h3>
        <input
          type="text" 
          name="review"
          id="review"
          value={ formData.review }
          onChange={ handleChange }
        />
      <p> You: {currentUser?.username }</p>
        <Form.Text className="text-muted">
          Your feedback is greatly appreciated and useful...
        </Form.Text>

      </Form.Group>

      <Button variant="primary" type="submit" value="Edit Review">
        Submit
      </Button>

    </Form>
    
  )
}