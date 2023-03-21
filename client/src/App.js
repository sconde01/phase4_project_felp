import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { FoodTruckProvider } from './Context/FoodTruckContext';
import FoodTruckCards from './foodtruck/FoodTruckCards';
import { FoodTruckContainer } from './foodtruck/FoodTruckContainer';

import Header from "./static/Header";
import { NavBar } from './static/NavBar';

function App() {
  return (
    <Router>
        <FoodTruckProvider>
          <NavBar/>
          <Header/>
          <Routes>
            <Route path="/food_trucks" element= { <FoodTruckContainer/>} />
            <Route path="/food_trucks/:id" element= { <FoodTruckCards/>} />
          </Routes>
        </FoodTruckProvider>
    
  </Router>
  )
}

export default App;
