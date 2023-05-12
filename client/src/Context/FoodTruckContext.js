import { createContext, useState, useEffect } from "react";

const FoodTruckContext = createContext ([]);

const FoodTruckProvider = ({ children }) => {
  const [foodtrucks, setFoodTrucks] = useState([]);
//console.log("foodtrucks at top of foodtruck provider", foodtrucks)

  useEffect (() => {
    fetch('/food_trucks')
      .then(r => r.json())
      .then(data => { 
        setFoodTrucks(data)
      })
  }, [])

  //Helpers:

  //add a food truck
  const addFoodTruck = foodtruck => {
    setFoodTrucks([...foodtrucks, foodtruck]);
  }

  //edit a food truck review
  const editFoodTruckReview = editedReview => {
    const foodtruck = foodtrucks.find( ft => editedReview.food_truck_id === ft.id )
    console.log("foodtruck", foodtruck);

    const updateReview = foodtruck.reviews.map(review => {
      if(editedReview.id === review.id) {
        return editedReview; 
      } else {
        return review;
      }
    });
    const updatedFoodTruck = {
      ...foodtruck, 
      reviews: updateReview
    }
    const updateFoodTrucks = foodtrucks.map(foodtruck => {
      if(updatedFoodTruck.id === foodtruck.id) {
        return updatedFoodTruck; 
      } else {
        return foodtruck;
      }
    });
  
    setFoodTrucks(updateFoodTrucks);
  }

  //delete a food truck review
  const deleteFoodTruckReview = deletedFoodTruckReview => {
    //debugger
    const foodtruck = foodtrucks.find( ft => deletedFoodTruckReview.food_truck_id === ft.id )
// make copy of foodtruck 
    const updateReviews = foodtruck.reviews?.filter(
      review => review.id !== deletedFoodTruckReview.id)
    // console.log("updateReviews", updateReviews);

    const copyofFT = {...foodtruck, reviews: updateReviews}
    const updatedFoodTrucks = foodtrucks.map( ft => {
      if( ft.id === deletedFoodTruckReview.food_truck_id) {
        return copyofFT
      }else{
        return ft
    } })    
      setFoodTrucks(updatedFoodTrucks);
      // console.log("updated ft", updateReviews);
  }
  
  return <FoodTruckContext.Provider value={{ foodtrucks, setFoodTrucks, deleteFoodTruckReview, addFoodTruck ,editFoodTruckReview}}>{ children }</FoodTruckContext.Provider>



}


export { FoodTruckContext, FoodTruckProvider };

