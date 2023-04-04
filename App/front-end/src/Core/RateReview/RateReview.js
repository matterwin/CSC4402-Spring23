import React from 'react';
import { useEffect } from 'react';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import PopupReview from './PopupReview';
import PopupAddMovie from './PopupAddMovie';
// import Divider from '@mui/material/Divider';

import './RateReview.css'
import '../../Hooks/readCookies'
import readCookies from '../../Hooks/readCookies';

function RateReview() {

  useEffect(() => {
    if(readCookies())
      console.warn("User signed in");
    else {
      window.location.href = "/Login";
    }
  },[])

  return (
    <div>
        <div className="profile-container">
          <div className='review-buttons-div'>
            <div className='review-btn'>
              {/* <NavLink end to="/Rate&Review/create"> */}
                <Button 
                sx={{
                    backgroundColor: '#A1C7ED',
                    color: "#1976d2",
                    border: '0.5px solid #2a3038',
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.6)",
                    '&:hover': {
                        backgroundColor: '#fff',
                        color: "#1976d2"
                    }
                }}
                href="/Rate&Review/create"
                >
                    RATE A MOVIE
                </Button>
              {/* </NavLink> */}
            </div>
            {/* <Divider orientation="vertical" style={{ backgroundColor: '#A1C7ED', height: '38px', width:'1px' }} /> */}
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
            <div className='up-btn'>
              <PopupAddMovie/>
            </div>        
          </div>
          <div className='no-vid-msg'>
              <TheaterComedyIcon sx={{ fontSize: 50, color: '#1d1d20' }}/>
              <p className='h1-msg'>You don't have any Movie Reviews</p>
              <p className='p-msg'>Add a new Movie Review by clicking the button down below</p>      
              <PopupReview />
          </div>
          <div>
          <div className='space'>&nbsp;</div>
          <div className='space'>&nbsp;</div>
          <div className='space'>&nbsp;</div>
          <div className='space'>&nbsp;</div>
          <div className='space'>&nbsp;</div>
          </div>
        </div>
    </div>
  );
}

export default RateReview;
