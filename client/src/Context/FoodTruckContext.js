import { createContext, useState, useEffect } from "react";

const FoodTruckContext = createContext ([]);

const FoodTruckProvider = ({ children }) => {
  const [foodtrucks, setFoodTrucks] = useState([])

  useEffect (() => {
    fetch('/food_trucks')
      .then(r => r.json())
      .then(data => 
        { 
        setFoodTrucks(data)
      })
  }, [])

  const addFoodTruck = foodtruck => {
    setFoodTrucks([...foodtrucks, foodtruck]);
  }
  
  return <FoodTruckContext.Provider value={{ foodtrucks, addFoodTruck }}>{ children }</FoodTruckContext.Provider>


}



export { FoodTruckContext, FoodTruckProvider };