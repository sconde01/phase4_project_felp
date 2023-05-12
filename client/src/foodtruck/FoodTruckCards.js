// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';

export const FoodTruckCards = ({foodtruck}) => {
  const { loggedIn } = useContext(UserContext);

  const show_reviews = foodtruck.reviews?.map( review => 
  <div key={review.id}>
    <h6><b>{review.username}:</b></h6> 
    <p>{review.review}</p>
  </div>)
   
  return (
    <Row >
      <Col>
        <Card className ={"ftcards"} style={{ width: '25rem'}}>
          <Card.Img variant="top" src={ foodtruck.image_url } />
             <Card.Body>
             <Card.Title><b>{ foodtruck.name } </b></Card.Title>
            <Card.Text>{ foodtruck.address }</Card.Text>
            {/* <Card.Text className = "cuisine">Cuisine: </Card.Text>  */}
            <Card.Text>{ foodtruck.cuisine}</Card.Text> 
            <h6><u> FOOD LOVER REVIEWS 💟:</u></h6> 
              { show_reviews } 
            <p>
              { loggedIn ? (
              <Link to={(`/food_trucks/${foodtruck.id}`)}>Add a Review</Link>) : (
              <Link to="/login">Log in to add a Review</Link>)
            }</p>

          </Card.Body>
        </Card>
      </Col> 
    </Row> 
  )
  
}

export default FoodTruckCards;
