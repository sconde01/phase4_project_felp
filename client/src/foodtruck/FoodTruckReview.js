import React, {useContext} from 'react'
import Card from 'react-bootstrap/Card';

import { useParams } from 'react-router-dom';
import { FoodTruckContext } from '../Context/FoodTruckContext';
import { NewReview } from '../reviews/NewReview';
// import { Reviews } from '../reviews/Reviews';

export const FoodTruckReview = () => {
  const { foodtrucks } = useContext(FoodTruckContext);

  const id  = parseInt(useParams().id);

  const foodtruck = foodtrucks.find(foodtruck => foodtruck.id === id);
  // console.log(foodtruck);

  // const show_reviews = foodtruck?.reviews.map( review => 
  //   <Reviews 
  //   key={review.id} 
  //   review={review} />)
  
    // console.log("showreviews", show_reviews);

  return (
    <div>
      <h1>{ foodtruck?.name }</h1>
      <Card style={{ width: '25rem'}}>
          <Card.Img variant="top" src={ foodtruck?.image_url } />
             <Card.Body>
             <Card.Title>{ foodtruck?.name } </Card.Title>
            <Card.Text>{ foodtruck?.address }</Card.Text>
            <Card.Text>Cuisine: { foodtruck?.cuisine}</Card.Text>
            {/* <p> Food Lovers are saying:</p>
              { show_reviews }  */}
              <NewReview/>
            </Card.Body>
        </Card>
    </div>
  )
}
