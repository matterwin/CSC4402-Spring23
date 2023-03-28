import React from 'react';
import superbad from '../Videos/superbad.jpg'
import SearchMovie from './SearchMovie'

import './MovieSelection.css';

function MovieSelection() {

  return (
    <div className='movie-selection-container'>
        <div className='movie-selection-div'>
            <img alt="pic of movie" src={superbad} className="movie-pic-selection"></img>
        </div>
        <div className='search-movie'>
            <SearchMovie />
        </div>
    </div>
  );
}

export default MovieSelection;