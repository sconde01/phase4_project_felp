import { useContext } from 'react'
import { FoodTruckContext } from '../Context/FoodTruckContext'
// import { ReviewsContext } from '../Context/ReviewsContext';
import FoodTruckCards from './FoodTruckCards';


export const FoodTruckContainer = () => {
  const {foodtrucks} = useContext(FoodTruckContext);
  // const{reviews} = useContext(ReviewsContext);

  const foodTruckCards = foodtrucks.map(foodtruck => 
  <FoodTruckCards 
  key={ foodtruck.id } 
  foodtruck={ foodtruck } />)

  // const reviewsInfo = reviews.map(review =>


  return (
    <div>
      { foodTruckCards }
      </div>
  )
}

export default FoodTruckContainer;
