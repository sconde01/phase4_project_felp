import { useContext } from 'react'
import { FoodTruckContext } from '../Context/FoodTruckContext'
import FoodTruckCards from './FoodTruckCards';


export const FoodTruckContainer = () => {
  const {foodtrucks} = useContext(FoodTruckContext);

  const foodTruckCards = foodtrucks.map(foodtruck => 
  <FoodTruckCards 
  key={ foodtruck.id } 
  foodtruck={ foodtruck }/>
  )

  return (
    <div className = "row row-cols-3" >
      { foodTruckCards }
      </div>
  )
}

export default FoodTruckContainer;
