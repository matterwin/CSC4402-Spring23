import React from 'react';
import SearchMovie from './SearchMovie';
import { useEffect, useState } from "react";
import Unknown from '../Videos/johncena.png';
import Tooltip from '@mui/material/Tooltip';
import superbad from '../Videos/superbad.jpg';

import './MovieSelection.css';

function MovieSelection() {

  const [movieId, setMovieId] = useState(-1);
  const [movie, setMovie] = useState(undefined); 
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    if (movieId > 0) {
      fetch(`http://localhost:8000/api/movieControllerWithAvg/${movieId}`)
        .then((res) => res.json())
        .then((json) => {
          setSlideIn(true); // Add the slide-in class to the img element
          setMovie(json);
          setTimeout(() => {
            setSlideIn(false); // Remove the slide-in class after the animation is complete
          }, 500);
        })
        .catch((err) => console.error(err));
    }
  }, [movieId]);
 
  function handleMovieSelection(movieId) {
    // console.log(movieId);
    setMovieId(movieId);
  }

  return (
    <div className='movie-selection-container'>
        <div className='search-movie'>
            <SearchMovie onMovieSelection={handleMovieSelection} />
        </div>
      <div className='movie-selection-div'> 
      {movie?.filepath ? (
        <div className='flex-div-select'>
          <div> 
              <img 
                alt="Movie pic" 
                className={`movie-pic-selection ${slideIn ? "slide-in" : ""}`} // Add the slide-in class conditionally
                src={ movie.filepath } 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = superbad;
                }} 
              />
          </div>
          <div>
            <p className='selected-movie-title'>{movie.name}</p>
          </div>
        </div>
      ) : (
        <div className='flex-div-select'>
          <Tooltip title="No movie selected">
            <img 
              alt="by" 
              className="movie-pic-selection"
              src={ Unknown } 
            />
          </Tooltip>
        </div>
      )}
      </div> 
    </div>
  );
}

//will be doing a different layout

export default MovieSelection;