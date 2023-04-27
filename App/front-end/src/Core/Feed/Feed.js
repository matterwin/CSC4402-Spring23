import React from 'react';
import { useState } from 'react';
import MovieCard from './MovieCard'
import './Feed.css'
import readCookies from '../../Hooks/readCookies';
import Tooltip from '@mui/material/Tooltip';
import FeedSearchBar from './FeedSearchBar';
import { NavLink } from "react-router-dom";
import fire from '../Videos/fire.gif';
import Sort from './Sort';

function Feed() {
  const userId = readCookies();
  const [movies, setMovies] = useState(undefined);

  return (
    <div>
      <div className="feed-container">
        <div className='blue-box-top'>
          <div className='login-signup'>
            { !userId ? 
              <>
                <span><a href='/Login' className='login-a'><b>LOGIN</b></a></span>
                /
                <span><a href='/Register' className='signup-a'><b>SIGNUP</b></a></span>
              </> : <></>
            }
          </div>
        </div>
        <div className='blue-box'>
          <div className="feed-opening-div" >
            <div className='feed-opening-title' style={{ backgroundImage: `url(${fire})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '100px 0' }}>
              <NavLink end to="/Feed"><p className='feed-welcome-title'><span className='M-title-feed'>M</span></p></NavLink> 
              <FeedSearchBar /> 
            </div>
          </div>
        </div>
        <div className='blue-box-bottom'>
          <p className='big-letters'><b>INFORMATION</b></p>
          <div className='rating-bot'>     
            <Tooltip title='Ratings are out of 5' placement="top">           
              <p>Ratings</p>
            </Tooltip>
          </div>
          <p></p>
        </div>
        <div className='movie-container'>
          <Sort movies={ movies } setMovies={ setMovies } />
          <div className="movies-div">
            <MovieCard movies={ movies } setMovies={ setMovies } />
          </div>            
        </div>
      </div>
    </div>
  );
}

export default Feed;
