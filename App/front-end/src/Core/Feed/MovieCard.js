import React, { useState, useEffect } from 'react';

import './MovieCard.css';
import Stars from './Stars';
import Loading from '../Loading/Loading'
import Unknown from '../Videos/johncena.png';
import { useNavigate } from "react-router-dom";

function MovieCard() {
  const [movies, setMovies] = useState(undefined);
  const navigate = useNavigate();
 
  useEffect(() => {
    fetch('http://localhost:8000/api/movieControllerFeed')
      .then(res => res.json())
      .then(json => setMovies(json))
      .catch(err => console.error(err));
  }, []);
    
  if(!movies) {
    return (
      <div className='loading'>
        <Loading />
      </div>
    );
  }

  const jsxMovies = [];

  const onClick = (id) => {
    navigate(`/Feed/Movie?id=${id}`);
  }

  movies.forEach((movie) => {
    jsxMovies.push(
        <div key={ movie.name } className='movie-review-div' data={ movie.id }>
            <img 
              src={ movie.filepath } 
              // onError={(e) => {
              //   e.target.onerror = null; 
              //   e.target.src = Unknown;
              // }} 
              alt={ movie.name } 
              onClick={() => {
                onClick(movie.id); 
              }}
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = Unknown;
              }} 
              className="movie-pic"
            />
            <div className='rating-in-movie-div'>
              <Stars value={movie.avg}/>
              <div className='percentage'>
                {(movie.avg/5*100).toFixed(0)}%
              </div>
            </div>
            <p className='movie-title'>{ movie.name }</p>
            <p className='last-review'>Released on: { movie.releaseDate }</p>
        </div>
    );
  });

  return (
    <div className='rows-of-movies'>
        { jsxMovies }
    </div>
  );
}

export default MovieCard;
