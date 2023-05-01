import React from 'react';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import Divider from '@mui/material/Divider';
import UserMovieReviews from './UserMovieReviews';
import getNumOfReviews from './ReviewAmountHooks/getNumOfReviews';
import './RateReview.css'
import readCookies from '../../Hooks/readCookies';

function RateReview() {
  const userId = readCookies();
  const [showReviews, setShowReviews] = useState(getNumOfReviews());

  useEffect(() => {
    if(!userId)
      window.location.href = "/Login";
      setShowReviews(getNumOfReviews());
  },[userId])

  useEffect(() => {
    setShowReviews(getNumOfReviews());
  },[showReviews])

  return (
    <div>
        <div className="profile-container">
          <div className='review-buttons-div'>
            <div className='review-btn'>
              {/* <NavLink end to="/Rate&Review/create"> */}
                <Button 
                sx={{
                  backgroundColor: '#fff',
                  border: '0.5px solid #2a3038',
                  '&:hover': {
                    backgroundColor: '#A1C7ED',
                    color: "#1976d2"
                  }
                }}
                href="/Rate&Review/create"
                >
                    RATE
                </Button>
              {/* </NavLink> */}
            </div>
            <Divider orientation="vertical" style={{ backgroundColor: '#8f8f8f', height: '38px', width:'1px' }} />
            <div className='feed-btn'>
              <NavLink end to='/Feed'>
                <Button 
                sx={{
                    backgroundColor: '#fff',
                    border: '0.5px solid #2a3038',
                    '&:hover': {
                      backgroundColor: '#A1C7ED',
                      color: "#1976d2"
                    }
                }}
                >
                  Feed
                </Button>
              </NavLink>
            </div>   
            {/* <Divider orientation="vertical" style={{ backgroundColor: '#A1C7ED', height: '38px', width:'1px' }} /> */}      
          </div>
            <div className="feed-container-rr">
              <div className='movie-container-rr'>
                <UserMovieReviews userId={userId} colorPick={'#1976d2'} colorButt={'#a1c7ed'}/>
              </div>
            </div>
          <div>
          </div>
        </div>
    </div>
  );
}

export default RateReview;
