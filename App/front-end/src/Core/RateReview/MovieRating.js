import React from 'react';
// import { useEffect } from 'react';
// import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
// import Button from '@mui/material/Button';
// import { NavLink } from "react-router-dom";
// import PopupReview from './PopupReview';
// import PopupAddMovie from './PopupAddMovie';
// import Divider from '@mui/material/Divider';
import Slider from './Slider';

import './MovieRating.css'

function MovieRating() {

  return (
    <div>
        <div className='writing-review-div'>
            <div>
                <Slider />
            </div>
            <div>
                <textarea/>
            </div>
           
        </div>
    </div>
  );
}

export default MovieRating;
