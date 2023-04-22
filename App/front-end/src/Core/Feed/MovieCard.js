import React from 'react';

import './MovieCard.css';
import Stars from './Stars';
import Loading from '../Loading/Loading'
// import Unknown from '../Videos/johncena.png';
import Unknown from '../Videos/superbad.jpg';
import { useNavigate } from "react-router-dom";
// import Tooltip from '@mui/material/Tooltip';

function MovieCard(props) {
  const navigate = useNavigate();
  const movies = props.movies;

  if(!props.movies) {
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
          {/* <Tooltip title={toolTipMsg}> */}
            <img 
              src={ movie.filepath } 
              alt={ movie.name } 
              onClick={() => {
                onClick(movie.id); 
              }}
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = Unknown;
                // setShowToolTip(true);
              }} 
              className="movie-pic"
            />
            {/* </Tooltip> */}
            <div className='rating-in-movie-div' onClick={() => {
                onClick(movie.id); 
              }}>
              <Stars value={movie.avg}/>
              <div className='percentage'>
                {(movie.avg/5*100).toFixed(0)}%
              </div>
            </div>
            <p 
              onClick={() => {
                onClick(movie.id); 
              }}
              className='movie-title'
            >
              { movie.name }
            </p>
            <p 
              onClick={() => {
                onClick(movie.id); 
              }}
              className='last-review'
            >
              Released { movie.releaseDate.replace(/-/g, " ") }
            </p>
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
