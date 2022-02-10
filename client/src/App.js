import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingP from './components/Principal/LandingP/LandingP';
import Home from './components/Principal/Home/Home';
/* import RecipeCreate from './components/RecipeC/RecipeC';
import RecipeDetail from './components/RecipeD/RecipeD';
import NavBar from './components/NavBar/NavBar'; */
import React from 'react';
import RecipeC from './components/Principal/RecipeC/RecipeC';
import RecipeD from './components/Principal/RecipeD/RecipeD';
/* import style from './App.module.css' */

function App() {
  return (
    <BrowserRouter >
      <div /* className={style.App} */>
        <Routes>
          {/* <Route path='/' element={<LandingP />} />
          <React.Fragment>
            <NavBar /> */}
            <Route exact path='/' element={<LandingP/>} />
            <Route  path='/home' element={<Home/>} />
            <Route  path='/recipe' element={<RecipeC />} />
            <Route  path='/recipe/:id' element={<RecipeD />} />
            {/* <Route path='/create' component={RecipeCreate} />
            <Route path='/recipe/:id' component={RecipeDetail} />
          </React.Fragment> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
