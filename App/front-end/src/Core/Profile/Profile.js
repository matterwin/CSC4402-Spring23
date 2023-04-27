import * as React from 'react';
import { useEffect, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import ReviewsIcon from '@mui/icons-material/Reviews';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
// import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
// import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import DefaultPic from "../Videos/defaultPic.png";
import readCookies from '../../Hooks/readCookies';
import UserMovieReviews from '../RateReview/UserMovieReivews';
import getReviewCountForProfile from '../RateReview/ReviewAmountHooks/getReviewCountForProfile';

import './Profile.css'

function Profile() {

    const userId = readCookies();
    const [reviewCount, setReviewCount] = useState();
    const [username, setUsername] = useState('');
    const [userProfilePic, setUserProfilePic] = useState("");

    useEffect(() => {
      getReviewCountForProfile()
      .then(amountOfReviews => {
        console.log(amountOfReviews);
        setReviewCount(amountOfReviews);
      });
    },[])

    useEffect(() => {
      if(!readCookies())
        window.location.href = "/Login";
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
                    {/* <h1 className='prof-name'>n/a</h1> */}
                    <h2 className='prof-username'>{username}</h2>
                </div>
            </div>
            
            <div className='edit-button-div'>
                <NavLink end to="/Settings">
                    <Button 
                        sx={{
                            backgroundColor: '#A1C7ED',
                            width: '100%',
                            border: '0.5px solid #2a3038',
                        }}
                    >
                        Edit Profile
                    </Button>
                </NavLink>          
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
                <UserMovieReviews />
            </div>
        </div>        
    </div>
  );
}

export default Profile;
