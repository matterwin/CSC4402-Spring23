import React, {useEffect, useState} from 'react';
import '../MovieCard.css';
import SingleStar from '../SingleStar';
import Loading from '../../Loading/Loading';
import Unknown from '../../Videos/superbad.jpg';
import './Movie.css'
import UserReviews from './UserReviews';
import Tooltip from '@mui/material/Tooltip';
import readCookies from '../../../Hooks/readCookies';
import FeedSearchBar from '../FeedSearchBar';
import { NavLink } from "react-router-dom";

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
          <div className='container-again'>
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
              <div className='movie-info-div'>
                  <div className='movie-name-new'>
                    { movie.name.toUpperCase() }
                  </div>
                  <div className='small-info-div'>
                    <div>
                      { movie.genre },
                    </div>
                    <div>
                      { movie.length },
                    </div>
                    <div>
                      { movie.releaseDate }
                    </div>
                  </div>
                  <div className='stars-fix-div'>
                    <div className='stars-div-fix'>
                      <SingleStar/>
                    </div>      
                    <Tooltip title={<h3 style={{ margin: '0px' }}>{(movie.avg).toFixed(1)} out of 5</h3>} enterDelay={0} leaveDelay={500}>
                    <div className='percentage-movie-info'>                   
                      {(movie.avg/5*100).toFixed(0)}%
                    </div>
                    </Tooltip>
                  </div>
              </div>
            </div>
          </div>
          <div className='comment-container'>
            <div className='comment-flex-box'>
              <h2 className='reviews-heading'>MOVIE INFO</h2>
              <div className='desc'>
                <span>{ movie.description }</span>
              </div>
              <div className='other-info-new'>
                <span className='span-info'>Genre:&nbsp;</span>{ movie.genre }
              </div>
              <div className='other-info-new'>
                <span className='span-info'>Rating:&nbsp;</span><span className='blue-rating'>{(movie.avg).toFixed(1)}/5 or {(movie.avg/5*100).toFixed(0)}%</span>
              </div>
              <div className='other-info-new'>
                <span className='span-info'>Release date:&nbsp;</span>{ movie.releaseDate }
              </div>
              <div className='other-info-new'>
                <span className='span-info'>Duration:&nbsp;</span>{ movie.length }
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
