import React, { useEffect, useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './ReviewPage.css'
import readCookies from '../../Hooks/readCookies';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import DefaultPic from "../Videos/defaultPic.png";
import MovieSelection from './MovieSelection';
import MovieRating from './MovieRating';
import postReview from './InputHooks/postReview';
import getMovieId from './InputHooks/getMovieId';
import getReview from './InputHooks/getReview';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

function ReviewPage() {

  const userId = readCookies();
  const [userProfilePic, setUserProfilePic] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [renderInFail, setRenderInFail] = useState(false);
  const [buttonClass, setButtonClass] = useState("");
  // const [renderInSuccess, setRenderInSuccess] =  useState(false);
  const [buttonColor, setButtonColor] =  useState("#1976d2");
  const [enableHover, setEnableHover] = useState(true);

  function handleFailure() {

    const intervalId = setInterval(() => {
      setButtonClass("inputInvalid");
      setButtonColor("#ff4444");
      setEnableHover(false);
    }, 0);

    setTimeout(() => {
        clearInterval(intervalId);
        setButtonClass("");
        setButtonColor("#1976d2");
        setEnableHover(true);
    }, 500);

  }

  function handleSuccess() {

    const intervalId = setInterval(() => {
      setButtonClass("inputSuccess");
      setButtonColor("#00ce8d");
      // setRenderInSuccess(true);
      setEnableHover(false);
    }, 0);

    setTimeout(() => {
      clearInterval(intervalId);
      setButtonClass("");
      setButtonColor("#1976d2b");
      // setRenderInSuccess(false);
      setEnableHover(true);
    }, 1000);

    setTimeout(() => {
      window.location = '/Rate&Review';
    }, 1000);
  }

  useEffect(() => {

    document.body.style.backgroundColor = '#2a3038';
    setIsDisabled(false); //bs line
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

    function handleSubmit() {

      console.log("review:           " + getReview().length);
      if(getReview().length === 0 || getMovieId() === 0) {
        handleFailure();
        return;
      }


      postReview()
      .then(statusCode => {
        console.log(`Status Code: ${statusCode}`);
        if(statusCode === '200') {
          handleSuccess();
          return;
        }      
        setRenderInFail(true);
        handleFailure();  
      });        
      return;   
    }

  return (
    <div>
        <div className='create-container'>
          <div className='flex-box-review-page'>
            <div className='buttons-div'>
              <div className='exit-div'>
                <a href="/Rate&Review">
                  <Tooltip title={<h3 style={{ margin: '0px' }}>Exit page</h3>}>
                    <KeyboardBackspaceIcon 
                      sx={{ 
                        fontSize: 30, 
                        cursor: 'pointer',
                        color: '#fff', 
                        padding: '8px', 
                        borderRadius: '90%', 
                        '&:hover': {
                          backgroundColor: '#f4f4f542'
                        } }}
                    /> 
                  </Tooltip>
                </a>
              </div>
              <div className='submit-div'>
                {/* <Tooltip title="Submit review"> */}
                {/* <span> */}
                  <Button 
                      sx={{
                          backgroundColor: buttonColor,
                          color: '#fff',
                          border: '0.5px solid #2a3038',
                          borderRadius: '50px',
                          '&:hover': {
                            backgroundColor: enableHover ? '#114d8a' : buttonColor
                          },
                          padding: '8px'
                      }}
                      disabled={isDisabled}
                      onClick={handleSubmit}
                      className={buttonClass}
                      type="submit"
                  >
                    Post
                  </Button>
                 {/* </span> */}
                {/* </Tooltip> */}
              </div>
            </div>
            { renderInFail &&
                <div className="review-alert-div">         
                    <Alert 
                      variant="outlined" 
                      severity="error" 
                      sx={{
                        color: 'white', backgroundColor: 'rgb(105, 0, 0)', 
                        paddingTop: '15px', paddingBottom: '15px', paddingLeft: '30px', paddingRight: '40px',
                        width: '75%',
                        borderRadius: '7px',
                        borderWidth: '2px',
                        borderColor: 'primary', 
                        position: 'relative'               
                      }}
                      action={
                        <IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            setRenderInFail(false);
                          }}
                          sx={{
                            padding: '10px',
                            '&:hover': {
                              backgroundColor: '#f4f4f542'
                            },
                            position: 'absolute',
                            right: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)'
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    >
                      Already reviewed this <strong>movie</strong>.
                    </Alert>   
                </div>
            }
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
