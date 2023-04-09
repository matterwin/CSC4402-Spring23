import React from 'react';
import SearchMovie from './SearchMovie';
import { useEffect, useState } from "react";
import Unknown from '../Videos/johncena.png';
import Tooltip from '@mui/material/Tooltip';
import johncena from '../Videos/johncena.png';
import updateMovieId from './InputHooks/updateMovieId';

import './MovieSelection.css';

function MovieSelection() {

  const [movieId, setMovieId] = useState(0);
  const [movie, setMovie] = useState(undefined); 

  useEffect(() => {
    if (movieId > 0) {
      fetch(`http://localhost:8000/api/movieControllerWithAvg/${movieId}`)
        .then((res) => res.json())
        .then((json) => {
          setMovie(json);
        })
        .catch((err) => console.error(err));
    }
  }, [movieId]);
 
  function handleMovieSelection(movieId) {
    setMovieId(movieId);
    updateMovieId(movieId);
  }

  // useEffect(() => {
  //   console.log(movieId);
  // },[movieId])

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
                className='movie-pic-selection'
                src={ movie.filepath } 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = johncena;
                }} 
              />
          </div>
          <div>
            <p className='selected-movie-title'>{movie.name}</p>
          </div>
        </div>
      ) : (
        <div className='flex-div-select'>
          <Tooltip title={<h3 style={{ margin: '0px' }}>No movie selected</h3>}>
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

export default MovieSelection;