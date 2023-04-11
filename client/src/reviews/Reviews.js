import React from 'react'
import Card from 'react-bootstrap/Card';

export const Reviews = ({ review }) => {

  return (
   <div> 
 <Card style={{ width: '25rem'}}>

    <Card.Text>{review.user.username} says:</Card.Text> 
    {/* make these card texts */}
    <p> "{review.review}"</p>
    </Card>
   </div> 
  )
}

