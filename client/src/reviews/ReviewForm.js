import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ErrorsContext } from '../Context/ErrorsContext';
import { ReviewsContext } from '../Context/ReviewsContext';
import { UserContext } from '../Context/UserContext';
import { Form, Button } from 'react-bootstrap';

export const ReviewForm = () => {
  const { setErrors } = useContext(ErrorsContext);
  const { loggedIn } = useContext(UserContext);
  const { addReview } = useContext(ReviewsContext);
  const [newReview, setNewReview ] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if(!loggedIn) {
      navigate('/login') }

      return () => {
        setErrors([])
      }
  }, [loggedIn, navigate, setErrors])

  const handleChange = e => {
    const { name, value } = e.target;
    // console.log(value)
    setNewReview({
      ...newReview,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    fetch('/reviews', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newReview)
    })
      .then(r => r.json())
      .then(data => {
        if(data.errors) {
        setErrors(data.errors)
      } else {
        addReview(data)
        navigate('/food_trucks');
      }
  });
  }

  return (
    <Form onSubmit={ handleSubmit }>
      <h1>Leave a Review</h1>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Review</Form.Label>
        <textarea
        type="text" 
        placeholder="Share your thoughts here..." 
        id="review"
        value={ newReview.review }
        onChange={ handleChange }
        />

        <Form.Text className="text-muted">
          Your feedback is greatly appreciated and useful...
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit" value="Create Review">
        Submit
      </Button>

    </Form>
  )
}
