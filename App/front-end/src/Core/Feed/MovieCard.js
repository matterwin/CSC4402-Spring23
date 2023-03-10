import React from 'react';

import './MovieCard.css';
import StarsIcon from '@mui/icons-material/Stars';
import screenPic from '../Videos/poe.jpg';
import superbad from '../Videos/superbad.jpg';
import fb from '../Videos/fb.jpg';
import nuke from '../Videos/nuke.jpg';
import mariobros from '../Videos/mariobros.jpg';
import wolf from '../Videos/wolf.jpg';
import transformers from '../Videos/transformers.jpg';
import bear from '../Videos/bear.jpg';

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
            <img alt="pic of movie" src={mariobros} className="movie-pic"></img>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <p className='movie-title'>The Super Mariobros</p>
            <p className='last-review'>Last Review: 10/20/23</p>
        </div>  
        <div className='movie-review-div'>
            <img alt="pic of movie" src={nuke} className="movie-pic"></img>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <p className='movie-title'>Oppenheimer</p>
            <p className='last-review'>Last Review: 10/20/23</p>
        </div>  
        <div className='movie-review-div'>
            <img alt="pic of movie" src={bear} className="movie-pic"></img>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <p className='movie-title'>Cocaine Bear</p>
            <p className='last-review'>Last Review: 10/20/23</p>
        </div>
        <div className='movie-review-div'>
            <img alt="pic of movie" src={wolf} className="movie-pic"></img>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <p className='movie-title'>The Wolf of Wallstreet</p>
            <p className='last-review'>Last Review: 10/20/23</p>
        </div>  
        <div className='movie-review-div'>
            <img alt="pic of movie" src={transformers} className="movie-pic"></img>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <StarsIcon sx={{color: "#1976d2"}}/>
            <p className='movie-title'>Transformers: Rise of The Beasts</p>
            <p className='last-review'>Last Review: 10/20/23</p>
        </div>  
    </div>
  );
}

export default MovieCard;