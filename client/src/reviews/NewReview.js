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

  const addFoodTruckReview = (review) => {
    //1. add review to current user object's reviews
    const updateCurrentUserReviews = [...currentUser.reviews, review]
    console.log("updatecurrent user review first" , updateCurrentUserReviews)
    //1a. now make sure that the current user reviews are set to be this new array
    // currentUser.reviews = updateCurrentUserReviews
    const copyofcurrentUser = {...currentUser, reviews: updateCurrentUserReviews}
    console.log("copyofcurrentUser", copyofcurrentUser)

    //>>>>>>how do i make sure that the food truck is already in food trucks list
    //debugger
    //if the food trucks of the copy of current user contains food truck with the id the same of review food truck id

    //do i need foodtruckReseult?? 
    const foodtruckResult = 
    copyofcurrentUser.food_trucks.find (ft => ft.id === review.food_truck.id) 
    //new food truck array with latest food truck (from review.food_truck) added to food_trucks 
    const newFoodTruckArray = [...copyofcurrentUser.food_trucks, review.food_truck]
    //add new updated food_truck array to current user
    const addFoodTruckArrayToCurrentUser = {...copyofcurrentUser, food_trucks: newFoodTruckArray}
    //console.log(addFoodTruckArrayToCurrentUser)
    //if foodtruckResults is undefined, then addFoodTruckIfNoResult
    const addFoodTruckIfNoResult = 
    (foodtruckResult !== addFoodTruckArrayToCurrentUser ? addFoodTruckArrayToCurrentUser : foodtruckResult)
    //console.log("finally", addFoodTruckIfNoResult)

    
    setCurrentUser(addFoodTruckIfNoResult)
    
    //2. add review to food trucks object's reviews  
    const updatedFoodTruckReview = {...getFoodTruck, reviews:[...getFoodTruck.reviews,review]}
    // console.log("up", updatedFoodTruck)
    //3. conditional logic that checks users food truck to see if a particular food truck is there
    const updatedFoodTruckReviews = foodtrucks.map( ft => {
      if( ft.id === review.food_truck_id) {
        return updatedFoodTruckReview
      }else{
        return ft
      }
    })
    setFoodTrucks(updatedFoodTruckReviews)

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

