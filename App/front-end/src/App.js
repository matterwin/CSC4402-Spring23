import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'

import Home from './Core/Home/Home'
// import Navbar from './Core/Nav/Navbar'
import Login from './UserAuth/Login'
import Register from './UserAuth/Register'
import Prof from './Core/Profile/Prof'
import RateReview from './Core/RateReview/RateReview'
import Feed from './Core/Feed/Feed'
import ScrollButton from './Core/Nav/ScrollButton'
import UserSettings from './Core/Profile/UserSettings'
import './App.css';
import ChooseNav from "./Core/Nav/ChooseNav";

function App() {

  console.log("rendered");

  const { pathname } = window.location;
  const HideNav = pathname === '/Register' || pathname === '/Login' ? null : <ChooseNav />

  return (
    <div>
       <Router>

          {HideNav}

          <ScrollButton />
        
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Profile" element={<Prof/>}/>
            <Route path="/Rate&Review" element={<RateReview/>}/>
            <Route path="/Feed" element={<Feed/>}/>
            <Route path="/Settings" element={<UserSettings/>}/>
          </Routes>

        </Router>
    </div>
  );
}

export default App;
