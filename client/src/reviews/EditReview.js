import { Form, Button } from 'react-bootstrap';
import React, {useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FoodTruckContext } from '../Context/FoodTruckContext';
import { UserContext } from '../Context/UserContext';
// import { ErrorsContext } from '../Context/ErrorsContext';


const initialState = {
  review: ""
}

export const EditReview = () => {
  // const { setErrors } = useContext(ErrorsContext);
  const { loggedIn, currentUser } = useContext(UserContext);
  const { editFoodTruckReview, reviews } = useContext(FoodTruckContext);
  const [ formData, setFormData ] = useState(initialState);
  const { id } = useParams();
  const navigate = useNavigate();
  // const prefillreview = reviews?.find(review => review.id === parseInt(id));
    // const [searchParams, setSearchParams] = useSearchParams();

    // const search = searchParams.get(`/reviews/${id}`)
    // console.log(search);
    //debugger

 useEffect(() => {
  if(!loggedIn) {
    navigate('/login')
  }
    const review = reviews.find(review => review.id === parseInt(id))
    if(currentUser.id !== review.user.id) {
      navigate('/food_trucks')
    }
    setFormData({
      review: review.review,
    })
  }
, [reviews, loggedIn, currentUser, id, navigate])

   

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
        navigate('/food_trucks')
      })
  }

  return (
    <div>
    <h1>Edit Review</h1>
    <Form onSubmit={ handleSubmit }>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <input
          type="text" 
          name="review"
          id="review"
          value={ formData.review }
          onChange={ handleChange }
        />

      <p> You: {currentUser?.username }</p>
        <Form.Text className="text-muted">
         <br/>
          Your feedback is greatly appreciated and useful...
        </Form.Text>

      </Form.Group>

      <Button variant="primary" type="submit" value="Edit Review">
        Submit
      </Button>

    </Form>
    </div>
  )
}
