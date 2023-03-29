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
        <div className='movie-and-info-div'>
          <div className='movie-div'>
              <img alt="pic of movie" src={screenPic} className="review-movie-pic"></img>        
          </div>
          <div className='information'>
            <div className='info-div'>
              <div className='info-heading'>
                <p>Kung Fu Panda</p>
              </div>
              <div className='stars-div'>
                <Stars value={4.5}/>
              </div>
              <div>
                <p className='review-movie-title'><b>Genre: </b>Comedy</p>
              </div>
              <div>
                <p className='review-movie-title'><b>Description: </b>An oddball group of cops, criminals, tourists and teens converge on a Georgia forest where a huge black bear goes on a murderous rampage after unintentionally ingesting cocaine.</p>
              </div>
              <div>
                <p className='review-movie-title'><b>Length: </b>1:25:0</p>
              </div>
              <div>
                <p className='review-movie-title'><b>Released on: </b>  12/2/23</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          Comment Section
        </div>
      </div>
      </div>
    </div>
  );
}

export default Movie;