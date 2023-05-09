import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { Login } from './auth/Login';
import { Signup } from './auth/Signup';
import { ErrorsProvider } from './Context/ErrorsContext';
import { FoodTruckProvider } from './Context/FoodTruckContext';
import { UserProvider } from './Context/UserContext';
import { FoodTruckContainer } from './foodtruck/FoodTruckContainer';
import { FoodTruckReview } from './foodtruck/FoodTruckReview';
import { NewFoodTruck } from './foodtruck/NewFoodTruck';
import { EditReview } from './reviews/EditReview';

import Header from "./static/Header";
import { NavBar } from './static/NavBar';
import { UserReviewList } from './users/UserReviewList';
import { UserFoodTrucks } from './users/UserFoodTrucks';
import { Errors } from './errors/Errors';

function App() {
  return (
    <Router>
      <ErrorsProvider>
        <UserProvider>
        <FoodTruckProvider>
          <NavBar/>
          <Header/>
          <Errors/>
          <Routes>
            <Route path="/food_trucks" element= { <FoodTruckContainer/>} />
            <Route path="/food_trucks/new" element= { <NewFoodTruck/>} />
            <Route path="/food_trucks/user-reviews" element= { <UserReviewList/>} />
            <Route path="/user/food_trucks" element= { <UserFoodTrucks/> } />
            <Route path="/food_trucks/:id" element= { <FoodTruckReview/>} />
            <Route path="/reviews/:id/edit" element= { <EditReview/>} />
            <Route path="/signup" element= { <Signup/>} />
            <Route path="/login" element= { <Login/>} />
          </Routes>
        </FoodTruckProvider>
      </UserProvider>
    </ErrorsProvider>
  </Router>
  )
}

export default App;
