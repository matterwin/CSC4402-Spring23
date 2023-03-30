import React, {useEffect, useState} from 'react';

import '../MovieCard.css';
// import StarsIcon from '@mui/icons-material/Stars';
import screenPic from '../../Videos/poe.jpg';
import Stars from '../Stars';
// import Tooltip from '@mui/material/Tooltip';

import './Movie.css'
import UserReviews from './UserReviews';

function Movie() {
  const [movie, setMovie] = useState(undefined); 


  useEffect(() => {
    const params = new URLSearchParams(window.location.search); 
    const id = params.get('id');

    fetch(`http://localhost:8000/api/movieController/${id}`)
      .then(res => res.json())
      .then(json => setMovie(json))
      .catch(err => console.error(err));
  }, []);

  if(!movie) {
    return(
      <h1>Loading</h1>
    );
  }

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
              <img alt="pic of movie" src={ movie.filepath } className="review-movie-pic"></img>        
          </div>
          <div className='information'>
            <div className='info-div'>
              <div className='info-heading'>
                <p>{ movie.name }</p>
              </div>
              <div className='stars-div'>
                <Stars value={4.5} />
              </div>
              <div>
                <p className='review-movie-title'><b>Genre: </b>{ movie.genre }</p>
              </div>
              <div>
                <p className='review-movie-title'><b>Description: </b>{ movie.description }</p>
              </div>
              <div>
                <p className='review-movie-title'><b>Length: </b>{ movie.length }</p>
              </div>
              <div>
                <p className='review-movie-title'><b>Released on: </b>{ movie.releaseDate }</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <UserReviews />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Movie;
