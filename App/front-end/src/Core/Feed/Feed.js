import React from 'react';
import FeedNav from './FeedNav'
import MovieCard from './MovieCard'
import './Feed.css'
import readCookies from '../../Hooks/readCookies';
import Tooltip from '@mui/material/Tooltip';
import FeedSearchBar from './FeedSearchBar';
import { NavLink } from "react-router-dom";

function Feed() {

  const userId = readCookies();

  return (
    <div>
      <div className="feed-container">
        <div className='blue-box-top'>
          <div className='login-signup'>
            { !userId ? 
              <>
                <span><a href='/Login' className='login-a'>LOGIN</a></span>
                /
                <span><a href='/Register' className='signup-a'>SIGNUP</a></span>
              </> : <></>
            }
          </div>
        </div>
        <div className='blue-box'>
          <div className="feed-opening-div">
            <div className='feed-opening-title'>
              <NavLink end to="/Feed"><p className='feed-welcome-title'>Navbar</p></NavLink> 
              <FeedSearchBar /> 
            </div>
          </div>
        </div>
        <div className='blue-box-bottom'>
          <div className='rating-bot'>
            <Tooltip title='Ratings are out of 5' placement="top">
              <p>Ratings</p>
            </Tooltip>
          </div>
        </div>
        <div className='movie-container'>
          <div className='feed-nav-div'>
            <FeedNav />
          </div>   
          <div className="movies-div">
            <MovieCard />
          </div>            
          <div className='space'>&nbsp;</div> 
          </div>
      </div>
    </div>
  );
}

export default Feed;