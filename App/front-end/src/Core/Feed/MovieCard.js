import React from 'react';

import './MovieCard.css';
import StarsIcon from '@mui/icons-material/Stars';
import screenPic from '../Videos/poe.jpg';
import superbad from '../Videos/superbad.jpg';
import fb from '../Videos/fb.jpg';

function MovieCard() {

  return (
    <div className='rows-of-movies'>
        <div className='movie-review-div'>
            <img alt="pic of movie" src={screenPic} className="movie-pic"></img>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <p className='movie-title'>Kung Fu Panda</p>
            <p className='last-review'>Last Review: 12/2/23</p>
        </div>   
        <div className='movie-review-div'>
            <img alt="pic of movie" src={superbad} className="movie-pic"></img>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <p className='movie-title'>Superbad</p>
            <p className='last-review'>Last Review: 1/9/23</p>
        </div>     
        <div className='movie-review-div'>
            <img alt="pic of movie" src={fb} className="movie-pic"></img>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <p className='movie-title'>The Social Network</p>
            <p className='last-review'>Last Review: 10/20/23</p>
        </div>  
        <div className='movie-review-div'>
            <img alt="pic of movie" src={screenPic} className="movie-pic"></img>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <p className='movie-title'>Kung Fu Panda</p>
            <p className='last-review'>Last Review: 10/20/23</p>
        </div>  
        <div className='movie-review-div'>
            <img alt="pic of movie" src={screenPic} className="movie-pic"></img>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <p className='movie-title'>Kung Fu Panda</p>
            <p className='last-review'>Last Review: 10/20/23</p>
        </div>  
        <div className='movie-review-div'>
            <img alt="pic of movie" src={screenPic} className="movie-pic"></img>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <p className='movie-title'>Kung Fu Panda</p>
            <p className='last-review'>Last Review: 10/20/23</p>
        </div>
        <div className='movie-review-div'>
            <img alt="pic of movie" src={screenPic} className="movie-pic"></img>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <p className='movie-title'>Kung Fu Panda</p>
            <p className='last-review'>Last Review: 10/20/23</p>
        </div>  
        <div className='movie-review-div'>
            <img alt="pic of movie" src={screenPic} className="movie-pic"></img>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <p className='movie-title'>Kung Fu Panda</p>
            <p className='last-review'>Last Review: 10/20/23</p>
        </div>  
        <div className='movie-review-div'>
            <img alt="pic of movie" src={screenPic} className="movie-pic"></img>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <p className='movie-title'>Kung Fu Panda</p>
            <p className='last-review'>Last Review: 10/20/23</p>
        </div>  
    </div>
  );
}

export default MovieCard;