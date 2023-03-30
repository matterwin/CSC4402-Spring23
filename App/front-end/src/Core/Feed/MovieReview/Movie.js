import React, {useEffect, useState} from 'react';
import '../MovieCard.css';
import Stars from '../Stars';
import Loading from '../../Loading/Loading';
import Unknown from '../../Videos/johncena.png';
import './Movie.css'
import UserReviews from './UserReviews';

function Movie() {
  const [movie, setMovie] = useState(undefined); 

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
