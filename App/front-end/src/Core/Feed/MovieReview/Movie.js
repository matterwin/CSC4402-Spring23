import React from 'react';

import '../MovieCard.css';
// import StarsIcon from '@mui/icons-material/Stars';
import screenPic from '../../Videos/poe.jpg';
import Stars from '../Stars';

import './Movie.css'

function Movie() {

  return (
    <div>
      <div className="feed-container">
      <div className='blue-box'>
          <div className="feed-opening-div">
            <div className='feed-opening-title'>
              <p className='feed-welcome-title'>Movies Across the Globe</p>
            </div>
          </div>
        </div>
      <div className='movie-container'>
        <p>&nbsp;</p>
        <div className='movie-and-info'>
          <div className='movie-div'>
              <img alt="pic of movie" src={screenPic} className="review-movie-pic"></img>        
          </div>
          <div className='information'>
            <div className='info-div'>
              <div>
                <Stars value={4.5}/>
              </div>
              <div>
                <p className='review-movie-title'>Kung Fu Panda</p>
              </div>
              <div>
                <p className='review-last-review'>Released on: 12/2/23</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Movie;