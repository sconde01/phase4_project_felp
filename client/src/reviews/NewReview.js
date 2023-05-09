import { Form, Button } from 'react-bootstrap';
import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import { ErrorsContext } from '../Context/ErrorsContext';
import { UserContext } from '../Context/UserContext';
import { FoodTruckContext } from '../Context/FoodTruckContext';

export const NewReview = () => {
  const { setErrors } = useContext(ErrorsContext);
  const {loggedIn, currentUser, setCurrentUser } = useContext(UserContext);
  const { foodtrucks, setFoodTrucks } = useContext(FoodTruckContext);
  const {id} = useParams();
 
  const getFoodTruck = foodtrucks?.find(foodtruck => foodtruck.id === parseInt(id));
  // console.log("getFoodTruck", getFoodTruck);

  const initialState ={
    review: "",
    food_truck_id: getFoodTruck.id
  }
  
  const [formData, setFormData ] = useState(initialState);
  // const [reviews, setReviews] = useState([]);
  
  const navigate = useNavigate();
  
  const addFoodTruckReview = review => {
    //1. add review to current user object's reviews
    const updateCurrentUserReviews = [...currentUser.reviews, review]
    //1a. now make sure that the current user reviews are set to be this new array
    // currentUser.reviews = updateCurrentUserReviews
    const copyofcurrentUser = {...currentUser, reviews: updateCurrentUserReviews}
    // console.log("copyofcurrentUser", copyofcurrentUser)
    setCurrentUser(copyofcurrentUser)
    
    //2. add review to food trucks object's reviews  
    const updatedFoodTruck = {...getFoodTruck, reviews:[...getFoodTruck.reviews,review]}
    // console.log("up", updatedFoodTruck)
    //3. conditional logic that checks users food truck to see if a particular food truck is there
    // const filteredFoodTrucks = foodtrucks.filter( ft => ft.id !== review.food_truck_id)
    // const newFoodTruck = [...filteredFoodTrucks, updatedFoodTruck]
    const updatedFoodTrucks = foodtrucks.map( ft => {
      if( ft.id === review.food_truck_id) {
        return updatedFoodTruck
      }else{
        return ft
      }
    })
    setFoodTrucks(updatedFoodTrucks)

  }


  useEffect(() => {
    if(!loggedIn) {
      navigate('/login') }
      return () => {
        setErrors([])
      }
    }, [loggedIn, navigate, setErrors])
    
    const handleChange = e => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        // the backets are used to put a variable value as a property
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
        console.log("data", data)
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

      <Button variant="primary" type="submit" value="Create Review">
        Submit
      </Button>

    </Form>
    </div>
  )
}

