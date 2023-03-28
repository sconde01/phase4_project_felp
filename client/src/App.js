import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { Login } from './auth/Login';
import { Signup } from './auth/Signup';
import { ErrorsProvider } from './Context/ErrorsContext';
import { FoodTruckProvider } from './Context/FoodTruckContext';
import { UserProvider } from './Context/UserContext';
import { FoodTruckCards } from './foodtruck/FoodTruckCards';
import { FoodTruckContainer } from './foodtruck/FoodTruckContainer';
import { ReviewForm } from './reviews/ReviewForm';

import Header from "./static/Header";
import { NavBar } from './static/NavBar';

function App() {
  return (
    <Router>
      <ErrorsProvider>
        <UserProvider>
        <FoodTruckProvider>
          <NavBar/>
          <Header/>
          <Routes>
            <Route path="/food_trucks" element= { <FoodTruckContainer/>} />
            <Route path="/food_trucks/:id" element= { <FoodTruckCards/>} />
            <Route path="/signup" element= { <Signup/>} />
            <Route path="/login" element= { <Login/>} />
            <Route path="/reviews" element= { <ReviewForm/>} />
          </Routes>
        </FoodTruckProvider>
      </UserProvider>
    </ErrorsProvider>
  </Router>
  )
}

export default App;
