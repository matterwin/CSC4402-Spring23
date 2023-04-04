import React from 'react';
import Slider from './Slider';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Tooltip from '@mui/material/Tooltip';

import './MovieRating.css'

function MovieRating() {

  return (
    <div>
        <div className='writing-review-div'>
            <div className='rating-div'>
                <div>
                    <p className='rating-note'>Rating</p>
                </div>
                <div className='info-icon-div'>
                    <Tooltip title="Rate your movie out of 100">
                        <InfoOutlinedIcon sx={{ color: "#fff", padding: '0', margin: '0' }}/>
                    </Tooltip>
                </div>
            </div>
            <div>
                <Slider />
            </div>
            <div>
                <textarea
                    className='text-area'
                    placeholder='Write up a review'
                />
            </div>
           
        </div>
    </div>
  );
}

export default MovieRating;
