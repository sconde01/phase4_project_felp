import { Form, Button } from 'react-bootstrap';
import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import { ErrorsContext } from '../Context/ErrorsContext';
import { UserContext } from '../Context/UserContext';
import { FoodTruckContext } from '../Context/FoodTruckContext';

export const NewReview = () => {
  
  
  const { setErrors } = useContext(ErrorsContext);
  const { loggedIn, currentUser } = useContext(UserContext);
  const { addFoodTruckReview, foodtrucks } = useContext(FoodTruckContext);
  const {id} = useParams();
 
  const getFoodTruck = foodtrucks.find(foodtruck => foodtruck.id === parseInt(id));
  // debugger
  const initialState ={
    review: "",
    food_truck_id: getFoodTruck.id
  }

  const [formData, setFormData ] = useState(initialState);
  // debugger
  
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!loggedIn) {
      navigate('/login') }
      return () => {
        setErrors([])
      }
    }, [loggedIn, navigate, setErrors])
    
    // I need to create a review that is associated to a food truck here or backend????
    const handleChange = e => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
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
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(data => {
        if(data.errors) {
          setErrors(data.errors)
      } else {
        console.log(data)
          addFoodTruckReview(data);
         navigate('/food_trucks');
      }
  });
  }

  return (
    <div>
      <h1>Leave a Review</h1>
    <Form onSubmit={ handleSubmit }>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <input
          type="text" 
          // placeholder="Share your thoughts here..." 
          name="review"
          id="review"
          value={ formData.review }
          onChange={ handleChange }
        />

      {/* <p> You: {currentUser?.username }</p> */}
      {/* <p> You: {food }</p> */}


      {/* below is me trying to attempt to add username requirement to this from */}
      {/* <input 
      type="username" 
      id="username"
      value={currentUser?.id}
      onChange={handleChange }
      /> */}

        <Form.Text className="text-muted">
         <br/>
          Your feedback is greatly appreciated and useful...
        </Form.Text>

      </Form.Group>

      <Button variant="primary" type="submit" value="Create Review">
        Submit
      </Button>

    </Form>
    </div>
  )
}
