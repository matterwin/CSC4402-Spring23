import React from 'react';
import SearchMovie from './SearchMovie';
import { useEffect, useState } from "react";
import Unknown from '../Videos/johncena.png';
import Tooltip from '@mui/material/Tooltip';

import './MovieSelection.css';

function MovieSelection() {

  const [movieId, setMovieId] = useState(1);
  const [movie, setMovie] = useState(undefined); 

  useEffect(() => {

    fetch(`http://localhost:8000/api/movieControllerWithAvg/${movieId}`)
      .then(res => res.json())
      .then(json => setMovie(json))
      .catch(err => console.error(err));
    console.log("movie changed");

  }, [movieId]);
 
  function handleMovieSelection(movieId) {

    setMovieId(movieId);
    

    console.log(movieId.toString());
  }

  return (
    <div className='movie-selection-container'>
      <div className='search-movie'>
          <SearchMovie onMovieSelection={handleMovieSelection} />
      </div>
      <div className='movie-selection-div'> 
      {movie?.filepath ? (
        <Tooltip title={movie.name}>

        
        <img 
          alt="by" 
          className="movie-pic-selection"
          src={ movie.filepath } 
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = Unknown;
          }} 
        />
        </Tooltip>
      ) : (
        <img 
          alt="by" 
          className="movie-pic-selection"
          src={ Unknown } 
        />
      )}
      </div> 
    </div>
  );
}

export default MovieSelection;