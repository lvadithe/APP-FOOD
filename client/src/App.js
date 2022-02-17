import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingP from './components/Principal/LandingP/LandingP';
import Home from './components/Principal/Home/Home';
import RecipeC from './components/Principal/RecipeC/RecipeC';
import RecipeD from './components/Principal/RecipeD/RecipeD';


function App() {
  return (
    <BrowserRouter >
      <div >
        <Routes>
          
            <Route exact path='/' element={<LandingP/>} />
            <Route  path='/home' element={<Home/>} />
            <Route  path='/recipe' element={<RecipeC />} />
            <Route  path='/recipe/:id' element={<RecipeD />} />
            
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
