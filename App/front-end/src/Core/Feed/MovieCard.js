import React, { useState, useEffect } from 'react';

import './MovieCard.css';
import Stars from './Stars';
import Loading from '../Loading/Loading'

function MovieCard() {
  const [movies, setMovies] = useState(undefined);
 
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

  movies.forEach((movie) => {
    jsxMovies.push(
        <div key={ movie.name } className='movie-review-div' data={ movie.id }>
            <img alt={ movie.name } src={ movie.filepath } className="movie-pic"></img>
            <Stars value={movie.avg}/>
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
