import React from 'react';
import { useEffect, useState } from 'react';
import readCookies from '../../../Hooks/readCookies';
import DefaultPic from "../../Videos/defaultPic.png";
import Tooltip from '@mui/material/Tooltip';

import './UserReviews.css'

function UserReviews() {

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
    <div>
      <div className='comment-container'>
          <div className='comment-flex-box'>
            <div className='comment-div'>
              <div className="comment-pfp-div">
                  <Tooltip title={username}>
                      <img className="profile-pic" src={userProfilePic} alt="ProfilePicture" />      
                  </Tooltip>            
              </div>  
              <div>
                <div className='comment-div-info'>
                  <div className='username'>
                    {username}
                  </div> 
                  <div className='desc'> 
                    Hello there this is a test description of whatever the tf
                  </div>
                  <div className='usr-rating'>
                    Rating: 4.3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default UserReviews;