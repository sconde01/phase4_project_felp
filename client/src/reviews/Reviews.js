import React from 'react'
import Card from 'react-bootstrap/Card';

export const Reviews = ({ review }) => {

return (
  <div> 
    <Card style={{ width: '23rem'}}>
    <Card.Text className = "usernamesays">{review.user.username} says:</Card.Text> 
    <p> "{review.review}"</p>
    </Card>
  </div> 
  )
}

