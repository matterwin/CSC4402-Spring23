import React, { useEffect, useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './ReviewPage.css'
import readCookies from '../../Hooks/readCookies';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import DefaultPic from "../Videos/defaultPic.png";
// import SearchMovie from './SearchMovie';
import MovieSelection from './MovieSelection';
import MovieRating from './MovieRating';

function ReviewPage() {

  const userId = readCookies();
  const [userProfilePic, setUserProfilePic] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  
  useEffect(() => {

    document.body.style.backgroundColor = '#2a3038';
    setIsDisabled(true); //bs line
    if(readCookies())
      console.warn("User signed in");
    else {
      window.location.href = "/Login";
    } 

  }, []);

  useEffect(() => {

    const url = `http://localhost:8000/api/userAuthControllerInfo?id=${userId}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if(data) { 
          if(data.url == null)
            setUserProfilePic(DefaultPic);
        }
      })
      .catch(error => console.error(error));

    },[userId])

  return (
    <div>
        <div className='create-container'>
          <div className='flex-box-review-page'>
            <div className='buttons-div'>
              <div className='exit-div'>
                <a href="/Rate&Review">
                  <Tooltip title="Exit page">
                    <KeyboardBackspaceIcon 
                      sx={{ 
                        fontSize: 30, 
                        cursor: 'pointer',
                        color: '#fff', 
                        padding: '8px', 
                        borderRadius: '100%', 
                        '&:hover': {
                          backgroundColor: '#f4f4f542'
                        } }}
                        
                    /> 
                  </Tooltip>
                </a>
              </div>
              <div className='submit-div'>
                <Tooltip title="Submit review">
                <span>
                  <Button 
                      sx={{
                          backgroundColor: isDisabled ? '#d9d9d9' : '#1976d2',
                          color: isDisabled ? '#a6a6a6' : '#fff',
                          border: '0.5px solid #2a3038',
                          borderRadius: '50px',
                          '&:hover': {
                            backgroundColor: isDisabled ? '#d9d9d9' : '#114d8a',
                          }
                      }}
                      disabled={isDisabled}
                  >
                    Post
                  </Button>
                 </span>
                </Tooltip>
              </div>
            </div>
            <div>
              <div className='juicy-stuff'>
                <div className="popup-pfp-div">
                    <img className="popup-profile-pic" src={userProfilePic} alt="ProfilePicture" />                 
                </div>
                <div className='selection-container'>
                  <div className='selection-div'>
                    <div>
                      <MovieSelection />
                    </div>
                    <div>
                      <MovieRating />
                    </div>
                  </div>
                  
                </div>
              </div>
              
            </div>
          </div>
        </div>
    </div>
  );
}

export default ReviewPage;
