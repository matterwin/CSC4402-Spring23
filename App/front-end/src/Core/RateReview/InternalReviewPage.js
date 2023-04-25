import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Tooltip from '@mui/material/Tooltip';
import updateReview from './InputHooks/updateReview';

// import readCookies from '../../Hooks/readCookies';
// import Button from '@mui/material/Button';

import './InternalReviewPage.css'

function InternalReviewPage() {

    const [userText, setUserText] = useState("");

    useEffect(() => {
        updateReview(userText);
    },[userText])

    const handleTextareaChange = (event) => {
        setUserText(event.target.value);
    }

    return (
    <div>
        <div className='internal-writing-review-div'>
            <div className='internal-rating-div'>
                <div>
                    <p className='internal-rating-note'>Rating</p>
                </div>
                <div className='internal-info-icon-div'>
                    <Tooltip title="Rate out of 100">
                        <InfoOutlinedIcon sx={{ color: "#2c323a", padding: '0', margin: '0', cursor: 'pointer' }}/>
                    </Tooltip>
                </div>
            </div>
            <div>
                <Slider tcolor={"#2c323a"} wid={260}/>
            </div>
            <textarea
                className='internal-text-area'
                placeholder='Write up a review'
                onChange={handleTextareaChange}
            />
        </div>
    </div>
    );
}

export default InternalReviewPage;
