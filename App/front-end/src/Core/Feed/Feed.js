import React from 'react';
import FeedNav from './FeedNav'
import MovieCard from './MovieCard'
import './Feed.css'
// import icon from '../Videos/popcorn.png'
// import MovieFilterIcon from '@mui/icons-material/MovieFilter';

function Feed() {

  return (
    <div>
      <div className="feed-container">
        <div className='blue-box'>
          <div className="feed-opening-div">
            {/* <div className='movie-icon'>
              <MovieFilterIcon sx={{fontSize:"45px", color: "#1976d2"}}/>
            </div> */}
            {/* <div className='movie-icon'>
              <img className='popcorn-img' src={icon}></img>
            </div> */}
            <div className='feed-opening-title'>
              <p className='feed-welcome-title'>Movies Across the Globe</p>
            </div>
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