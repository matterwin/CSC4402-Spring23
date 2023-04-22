import React, { useState } from 'react';
import './MovieCard.css';
import Stars from './Stars';
import Loading from '../Loading/Loading'
import Unknown from '../Videos/superbad.jpg';
import { useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';

function MovieCard(props) {
  const navigate = useNavigate();
  const movies = props.movies;
  const [isHovering, setIsHovering] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

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

    setTimeout(() => {
      setIsLoaded(true);
    }, 50 * movie.index);
    
    jsxMovies.push(
      <div 
        key={ movie.name } 
        className={`movie-review-div ${isLoaded ? 'fade-in' : ''}`} 
        data={ movie.id } 
        onMouseEnter={() => setIsHovering((prevState) => ({ ...prevState, [movie.id]: true }))}
        onMouseLeave={() => setIsHovering((prevState) => ({ ...prevState, [movie.id]: false }))}
      >
        {isHovering[movie.id] && (
        <div className='remove-redeye-icon'>
          <VisibilityIcon
            sx={{ fontSize:'40px', color: '#fff', padding:0, marginBottom: '-3px' }} 
            onClick={() => {
              onClick(movie.id); 
            }}/>
        </div>
        )}
        <img 
          src={ movie.filepath } 
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
          Debuted { movie.releaseDate.replace(/-/g, " ") }
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
