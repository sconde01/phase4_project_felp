import { createContext, useState, useEffect } from "react";

const FoodTruckContext = createContext ([]);

const FoodTruckProvider = ({ children }) => {
  const [foodtrucks, setFoodTrucks] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect (() => {
    fetch('/food_trucks')
      .then(r => r.json())
      .then(data => { 
        setFoodTrucks(data)
      })
  }, [])

  useEffect (() => {
    fetch('/reviews')
      .then(r => r.json())
      .then(data => {
        setReviews(data)
      })
  }, [])

  //Helpers
  const addFoodTruck = foodtruck => {
    setFoodTrucks([...foodtrucks, foodtruck]);
  }

  //add, edit, and delete REVIEWS helpers
  const addFoodTruckReview = review => {
    setReviews([...reviews, review]);
  }

  const editFoodTruckReview = editedReview => {
    const updateReview = reviews.map(review => {
      if(editedReview.id === review.id) {
        return editedReview; 
      } else {
        return review;
      }
    });
    setReviews(updateReview);
  }

  const deleteFoodTruckReview = deletedFoodTruckReview => {
    const updateReview = reviews.filter(
      review => review.id !== deletedFoodTruckReview.id)
      setReviews(updateReview);
  }
  
  return <FoodTruckContext.Provider value={{ foodtrucks, addFoodTruck , addFoodTruckReview, editFoodTruckReview, deleteFoodTruckReview}}>{ children }</FoodTruckContext.Provider>


}



export { FoodTruckContext, FoodTruckProvider };