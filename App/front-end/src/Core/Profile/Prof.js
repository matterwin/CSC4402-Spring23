import * as React from 'react';
import { useEffect, useState } from 'react';
// import Pika from "../Videos/pika.png";
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import ReviewsIcon from '@mui/icons-material/Reviews';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import DefaultPic from "../Videos/defaultPic.png";

import readCookies from '../../Hooks/readCookies';

import './Prof.css'

function Prof() {

    const userId = readCookies();
    const [username, setUsername] = useState('');
    const [userProfilePic, setUserProfilePic] = useState("");

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
        if(data) { 
          console.log(data);   
          setUsername(data.username);
          if(data.url == null)
            setUserProfilePic(DefaultPic);
        }
      })
      .catch(error => {       
        console.log("Error: " + error.message);
      });

    },[userId])

  return (
    <div className='profile-container'>
        <div className="profile-info">
            <div className='pic-and-name'>
                <div className="prof-pfp-div">             
                    <Tooltip title="Profile pic">
                        <img className="prof-profile-pic" src={userProfilePic} alt="ProfilePicture" />      
                    </Tooltip>             
                </div>
                <div className="name-and-username">
                    <h1 className='prof-name'>n/a</h1>
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
            <div className='small-info'>
                <div className='small-row'>
                    <Tooltip title="Reviews">
                        <ReviewsIcon sx={{color: '#2a3038'}}/></Tooltip>
                        <p>0</p>
                    
                </div>
                <div className='small-row'>
                    <VerifiedUserIcon sx={{color: '#2a3038'}}/>
                    <p>@{username}</p>
                </div>
                
            </div>
            
        </div>
        <div className="profile-info">
            
            <h2 className='reviews'>Reviews</h2>
            <div className='review-box'>
                <TheaterComedyIcon sx={{ fontSize: 50, color: '#2a3038' }}/>
                <p className='h1-msg'>You don't have any Movie Reviews</p>
                <p className='p-msg'>Add a new Movie Review by clicking the button down below</p>
                <NavLink className="title" end to="/RateReview">
                    <Button 
                        variant="outlined" 
                        startIcon={<AddToPhotosIcon  />}
                        style={{ backgroundColor: '#e7e7e7' }}
                    >
                        Rate A Movie
                    </Button>
                </NavLink>
            </div>
        </div>        
    </div>
  );
}

export default Prof;
