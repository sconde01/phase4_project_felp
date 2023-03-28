import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Reviews } from '../reviews/Reviews';
// import { Users } from '../users/Users';

export const FoodTruckCards = ({foodtruck}) => {

  const show_reviews = foodtruck.reviews.map( review => 
  <Reviews key={review.id} review={review} />)
   
  // const show_username = foodtruck.usernames.map( username => 
  // <Users key ={username.id} username={username} />)


  return (
    <Row >
      <Col>
        <Card style={{ width: '25rem'}}>
          <Card.Img variant="top" src={ foodtruck.image_url } />
             <Card.Body>
             <Card.Title>{ foodtruck.name } </Card.Title>
            <Card.Text>{ foodtruck.address }</Card.Text>
            <Card.Text>Cuisine: { foodtruck.cuisine}</Card.Text>
            <p> Food Lovers are saying:</p>
              { show_reviews } 
            <Button variant="primary">Sign in to add a review</Button>
          </Card.Body>
        </Card>
      </Col> 
    </Row> 
  )
}

export default FoodTruckCards;
