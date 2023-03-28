import React, { useState, useEffect } from 'react';

import './MovieCard.css';
// import StarsIcon from '@mui/icons-material/Stars';
import screenPic from '../Videos/poe.jpg';
import superbad from '../Videos/superbad.jpg';
import fb from '../Videos/fb.jpg';
import nuke from '../Videos/nuke.jpg';
import mariobros from '../Videos/mariobros.jpg';
import wolf from '../Videos/wolf.jpg';
import transformers from '../Videos/transformers.jpg';
import bear from '../Videos/bear.jpg';
import Stars from './Stars';

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
      <div>
        <h1>Loading</h1>
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
