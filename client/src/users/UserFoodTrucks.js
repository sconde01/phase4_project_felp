import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext';
import Card from 'react-bootstrap/Card';

//I need to be able to display users and their food trucks 
export const UserFoodTrucks = () => {
  const { currentUser } = useContext(UserContext);

  //I want to render current users food trucks 
  const user_ft = currentUser?.food_trucks.map (ft => (
    <div key={ft.id}> 
      <Card className= "userreviewlist" style={{ width: '20rem'}}>
      <Card.Body>

      <Card.Title>{ft.name}</Card.Title>
      <Card.Text>{ft.address}</Card.Text> 
      <Card.Img variant="top" src={ ft.image_url } />
      {/* <Link to="#" onClick= {() => {handleDelete(review)}}>Delete</Link> */}

      </Card.Body>
      </Card>
    </div>
  ))
  

  return (
    <div>
      <center><h4>Your Food Trucks:</h4></center>
      <br/>
       { user_ft }
    </div>
  )

}
