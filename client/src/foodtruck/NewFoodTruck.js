import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ErrorsContext } from '../Context/ErrorsContext';
import { FoodTruckContext } from '../Context/FoodTruckContext';
import { UserContext } from '../Context/UserContext';

export const NewFoodTruck = () => {

  const initialState = {
    name: "",
    address: "",
    cuisine: "",
    image_url: ""
  }
  
  const { setErrors } = useContext(ErrorsContext);
  const { loggedIn } = useContext(UserContext);
  const { addFoodTruck } = useContext(FoodTruckContext)
  const [ formData, setFormData ] = useState(initialState);

  const navigate = useNavigate();

  useEffect(() => {
    if(!loggedIn) {
      navigate('/login')}
    return () => {
      setErrors([])
    }
  }, [loggedIn, navigate, setErrors])

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    fetch('/food_trucks', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(data => {
        if(data.errors) {
          setErrors(data.errors)
        } else {
          addFoodTruck(data)
          navigate('/food_trucks');
        }
      });
  }


  return (
    <div>
    <h3>Add Food Truck! </h3>

    <form onSubmit={ handleSubmit }>
      <div>
        <label id="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={ formData.name }
          onChange={ handleChange }
        />
      </div>
      <div>
        <label id="address">Address</label>
        <textarea
          type="text"
          name="address"
          value={ formData.address }
          onChange={ handleChange }
        />
      </div>
      <div>
        <label id="cuisine">Cuisine</label>
        <textarea
          type="text"
          name="cuisine"
          value={ formData.cuisine }
          onChange={ handleChange }
        />
      </div>
      <div>
        <label id="image_url">Image URL:</label>
        <textarea
          type="image_url"
          name="image_url"
          value={ formData.image_url }
          onChange={ handleChange }
        />
      </div>

      <input type="submit" value="Add Food Truck" />
    </form>
  </div>
  )
}
