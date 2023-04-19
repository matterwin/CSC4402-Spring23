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
// import LoadingPic from './Core/LoadingScreen/LoadingPic';
// import LoadingCircle from './Core/LoadingScreen/LoadingCircle';
import Logout from './UserAuth/Logout';

import './App.css';

function App() {
  const { pathname } = window.location;
  const HideNav = pathname === '/Register' 
                || pathname === '/Login' 
                || pathname === '/Rate&Review/create' 
                || pathname === '/Logout'
  ? null : <ChooseNav />

  // const [isLoadingScreen, setIsLoadingScreen] = useState(true);
  // const [isLoadingContent, setIsLoadingContent] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoadingScreen(false);
  //     setIsLoadingContent(true);
  //     setTimeout(() => {
  //       setIsLoadingContent(false);
  //     }, 200);
  //   }, 400);
  // }, []);

  // if (isLoadingScreen && pathname !== '/Logout' 
  //                     && pathname !== '/Rate&Review/create'
  //                     && pathname !== '/Register' 
  //                     && pathname !== '/Login' ){
  //   return (
  //     <div className='center-of-screen'>
  //       <LoadingPic />
  //     </div>
  //   );
  // }

  // if (isLoadingContent && pathname !== '/Logout' 
  //                      && pathname !== '/Rate&Review/create'
  //                      && pathname !== '/Register' 
  //                      && pathname !== '/Login' ){
  //   return (
  //     <div className='center-of-screen'>
  //       <LoadingCircle />
  //     </div>
  //   );
  // }

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
          </Routes>

        </Router>
    </div>
  );
}

export default App;
