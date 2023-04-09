import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Tooltip from '@mui/material/Tooltip';
import updateReview from './InputHooks/updateReview';

import './MovieRating.css'

function MovieRating() {

    const [userText, setUserText] = useState("");

    useEffect(() => {
        updateReview(userText);
    },[userText])

    const handleTextareaChange = (event) => {
        setUserText(event.target.value);
    }

    return (
    <div>
        <div className='writing-review-div'>
            <div className='rating-div'>
                <div>
                    <p className='rating-note'>Rating</p>
                </div>
                <div className='info-icon-div'>
                    <Tooltip title={<h3 style={{ margin: '0px' }}>Rate out of 100</h3>}>
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
                    onChange={handleTextareaChange}
                />
            </div>  
        </div>
    </div>
    );
}

export default MovieRating;
