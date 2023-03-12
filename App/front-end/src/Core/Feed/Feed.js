import React from 'react';

import FeedBar from './FeedNav'
import MovieCard from './MovieCard'
import './Feed.css'
import MovieFilterIcon from '@mui/icons-material/MovieFilter';

function Feed() {

  return (
    <div>
      <div className="feed-container">
        <div className="feed-bar">
          <FeedBar />
        </div>
          <div className='movie-icon'>
            <MovieFilterIcon sx={{fontSize:"45px",color: "#1976d2"}}/>
          </div>
          <p className='feed-welcome-title'>Welcome to our feed review movie page!</p>
          <p className='feed-welcome-msg'>Here, you can discover the latest and greatest movies, and read reviews from fellow movie enthusiasts.</p>
          <div className='rows-of-movies'>
            <MovieCard />
          </div>
          
          <div className='space'>&nbsp;</div>
          <div className='space'>&nbsp;</div>
          <div className='space'>&nbsp;</div>
          <div className='space'>&nbsp;</div>
          <div className='space'>&nbsp;</div>
          <div className='space'>&nbsp;</div>
          <div className='space'>&nbsp;</div>
          <div className='space'>&nbsp;</div>
        </div>
        <div className='space'>&nbsp;</div>
    </div>
  );
}

export default Feed;