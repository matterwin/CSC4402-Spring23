import * as React from 'react';
import { useEffect, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import ReviewsIcon from '@mui/icons-material/Reviews';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import DefaultPic from "../Videos/defaultPic.png";
import UserMovieReviews from '../RateReview/UserMovieReviews';
import getReviewCountForOther from '../RateReview/ReviewAmountHooks/getReviewCountForOther';
import getUserId from './OtherHooks/getUserId';

import './OtherUser.css'

function OtherUser() {

    const userId = getUserId();
    const [reviewCount, setReviewCount] = useState();
    const [username, setUsername] = useState('');
    const [userProfilePic, setUserProfilePic] = useState("");
      
    useEffect(() => {
      if(userId === -1)
        window.location.href = "/";
    },[userId]);

    useEffect(() => {
      getReviewCountForOther()
      .then(amountOfReviews => {
        console.log(amountOfReviews);
        setReviewCount(amountOfReviews);
      });
    },[])

    useEffect(() => {

      const url = `http://localhost:8000/api/userAuthControllerInfo?id=${userId}`;

      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (response.status === 404) {
          throw new Error("User not found");
        }
        return response.json();     
      })
      .then(data => {
        console.log(data);
        if(data) { 
          setUsername(data.username);
          if(data.url == null)
            setUserProfilePic(DefaultPic);
        }
      })
      .catch(error => {       
        console.error(error);
      });

      window.scrollTo(0, 0);

    },[userId])

  return (
    <div className='contain'>
        <div className="profile-info">
            <div className='pic-and-name'>
                <div className="prof-pfp-div">             
                    <Tooltip title="Profile pic">
                        <img className="prof-profile-pic" src={userProfilePic} alt="ProfilePicture" />      
                    </Tooltip>             
                </div>
                <div className="name-and-username">
                    <h1 className='prof-username'>{username}</h1>
                </div>
            </div>
            <div className='small-info-profile'>
                <div className='small-row'>
                  <Tooltip title="Reviews">
                      <ReviewsIcon sx={{color: '#2a3038'}}/>
                  </Tooltip>
                  <p className='p-info'>{reviewCount}</p>
                </div>
                <div className='small-row'>
                  <Tooltip title="Username">
                    <VerifiedUserIcon sx={{color: '#2a3038'}}/>
                  </Tooltip>
                  <p className='p-info'>@{username}</p>
                </div>         
            </div>
        </div>
        <div className="review-info">
            <h2 className='reviews'>Reviews</h2>
            <div className='review-box'>
                <UserMovieReviews userId={userId}/>
            </div>
        </div>        
    </div>
  );
}

export default OtherUser;
