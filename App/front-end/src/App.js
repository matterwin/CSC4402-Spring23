import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Core/Home/Home'
import Login from './UserAuth/Login'
import Register from './UserAuth/Register'
import Profile from './Core/Profile/Profile'
import RateReview from './Core/RateReview/RateReview'
import Feed from './Core/Feed/Feed'
import ScrollButton from './Core/Nav/ScrollButton'
import UserSettings from './Core/Profile/UserSettings'
import Movie from './Core/Feed/MovieReview/Movie'
import ChooseNav from "./Core/Nav/ChooseNav";
import ReviewPage from './Core/RateReview/ReviewPage';
import Logout from './UserAuth/Logout';
import NotFoundPage from './Core/NotFound/NotFoundPage';

import './App.css';

function App() {
  const { pathname } = window.location;
  const validNavPath = pathname === '/' 
                     || pathname === '/Login' 
                     || pathname === '/Register' 
                     || pathname === '/Profile'
                     || pathname === '/Rate&Review' 
                     || pathname === '/Rate&Review/create' 
                     || pathname === '/Feed' 
                     || pathname === '/Settings'
                     || pathname === '/Feed/Movie' 
                     || pathname === '/Logout';

  const HideNavIf = pathname === '/Register' 
                || pathname === '/Login' 
                || pathname === '/Rate&Review/create' 
                || pathname === '/Logout'
                
  const HideNav = (validNavPath || HideNavIf) ? <ChooseNav /> : null;

  return (
    <div>
       <Router>

          {HideNav}

          <ScrollButton />
        
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Profile" element={<Profile/>}/>
            <Route path="/Rate&Review" element={<RateReview/>}/>
            <Route path="/Rate&Review/create" element={<ReviewPage/>}/>
            <Route path="/Feed" element={<Feed/>}/>
            <Route path="/Settings" element={<UserSettings/>}/>
            <Route path="/Feed/Movie" element={<Movie/>}/>
            <Route path="/Logout" element={<Logout/>}/>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

        </Router>
    </div>
  );
}

export default App;
