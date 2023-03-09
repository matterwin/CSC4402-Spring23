import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'

import Home from './Core/Home/Home'
import Navbar from './Core/Nav/Navbar'
import Login from './UserAuth/Login'
import Register from './UserAuth/Register'
import Profile from './Core/Profile/Profile'
import RateReview from './Core/RateReview/RateReview'
import Feed from './Core/Feed/Feed'
import './App.css';

function App() {

  console.log("rendered");

  const { pathname } = window.location;
  const HideNav = pathname === '/Register' || pathname === '/Login' ? null : <Navbar />

  return (
    <div>
       <Router>
          
          {/* {
            location.pathname !== '/Register' && <Navbar />
          } */}

          {HideNav}
        
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Profile" element={<Profile/>}/>
            <Route path="/RateReview" element={<RateReview/>}/>
            <Route path="/Feed" element={<Feed/>}/>
          </Routes>

        </Router>
    </div>
  );
}

export default App;
