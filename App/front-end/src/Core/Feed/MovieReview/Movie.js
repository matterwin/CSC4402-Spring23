import React, {useEffect, useState} from 'react';
import '../MovieCard.css';
import Stars from '../Stars';
import Loading from '../../Loading/Loading';
import Unknown from '../../Videos/superbad.jpg';
import './Movie.css'
import UserReviews from './UserReviews';
import Tooltip from '@mui/material/Tooltip';
import readCookies from '../../../Hooks/readCookies';

function Movie() {
  const [movie, setMovie] = useState(undefined); 
  const userId = readCookies();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search); 
    const id = params.get('id');

    fetch(`http://localhost:8000/api/movieControllerWithAvg/${id}`)
      .then(res => res.json())
      .then(json => setMovie(json))
      .catch(err => console.error(err));
  }, []);

  if(!movie) {
    return(
      <div className='loading'>
        <Loading />
      </div>
    );
  }

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
              <p className='feed-welcome-title'>Movies Across the Globe</p>
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
        <div className='movie-and-info-div'>
          <div className='movie-div'>
              <img 
                alt="pic of movie" 
                src={ movie.filepath } 
                className="review-movie-pic"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = Unknown;
                }} 
              >
              </img>        
          </div>
          <div className='information'>
            <div className='info-div'>
              <div className='info-heading'>
                <p>{ movie.name }</p>
              </div>
              <div className='stars-div'>
                <Stars value={movie.avg} />
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
          <UserReviews movieId={movie.id}/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Movie;
