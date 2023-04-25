import React from 'react';
import { useEffect, useState } from 'react';
import readCookies from '../../../Hooks/readCookies';
import DefaultPic from '../../Videos/defaultPic.png';
import Tooltip from '@mui/material/Tooltip';
import './InternalReview.css'
import Button from '@mui/material/Button';
import postReview from '../../RateReview/InputHooks/postReview';
import getMovieId from '../../RateReview/InputHooks/getMovieId';
import updateMovieId from '../../RateReview/InputHooks/updateMovieId';
import getReview from '../../RateReview/InputHooks/getReview';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { NavLink } from "react-router-dom";
import InternalReviewPage from '../../RateReview/InternalReviewPage';
import Loading from '../../Loading/Loading';
import InternalPreview from './InternalPreview';
import getShowPreview from './ReviewHooks/getShowPreview';
import updateDelDisplay from './ReviewHooks/updateDelDisplay';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function InternalReview(props) {

    const userId = readCookies();
    const movieIdConst = props.movieId;
    const setMovieReviews = props.setMovieReviews;
    const [username, setUsername] = useState('');
    const [userProfilePic, setUserProfilePic] = useState("");
    const [renderInFail, setRenderInFail] = useState(false);
    const [buttonClass, setButtonClass] = useState("");
    const [buttonColor, setButtonColor] =  useState("");
    const [enableHover, setEnableHover] = useState(true);
    const [changeToWhite, setChangeToWhite] = useState(false);
    const [successfulLoad, setSuccessfulLoad] = useState(false);
    const [showPreview, setShowPreview] = useState(getShowPreview());

  function handleFailure() {

    const intervalId = setInterval(() => {
      setButtonClass("inputInvalid");
      setButtonColor("#ff4444");
      setChangeToWhite(true);
      setEnableHover(false);
    }, 0);

    setTimeout(() => {
        clearInterval(intervalId);
        setButtonClass("");
        setButtonColor("");
        setChangeToWhite(false);
        setEnableHover(true);
    }, 500);

  }

  function handleSuccessLoading() {

    const intervalId = setInterval(() => {
      setSuccessfulLoad(true);
    }, 0);

    setTimeout(() => {
      clearInterval(intervalId);
      setSuccessfulLoad(false);
    }, 1000);

  }

  function handleSuccess() {
    setTimeout(() => {
        handleSuccessLoading();
        setTimeout(() => {
          setShowPreview(true);
        }, 1000);
    }, 0); 
  }

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

      if(getReview().length === 0 || getMovieId() === 0) {
        handleFailure();
        return;
      }
      
      postReview()
      .then(statusCode => {
        console.log(`Status Code: ${statusCode}`);
        if(statusCode === '200') {
          handleSuccess();
          setTimeout(() => {
            fetch(`http://localhost:8000/api/movieReviewControllerWithUser/${props.movieId}`)
            .then(res => res.json())
            .then(json => {setMovieReviews(json); console.log(json)})
            .catch(err => console.error(err));
          }, 1000); 
          return;
        }
        else if(statusCode !== '200') {
          setShowPreview(true);
          return;
        }       
        setRenderInFail(true);
        handleFailure();  
      });        
      return;   
    }

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
            setUsername(data.username);
            if(data.url == null)
              setUserProfilePic(DefaultPic);
          }
        })
        .catch(error => {       
          console.error(error);
        });
  
    },[userId])

    useEffect(() => {
      console.log(props.movieId);
        updateMovieId(props.movieId);
    },[props.movieId])

    const handleDelete = () => {
      updateDelDisplay(true);
    }

  return (
    <div>
        <div className='internal-comment-div'>
          { showPreview ? (
            <> 
              <div className='left-div'>
                <div className="comment-pfp-div">
                  <img className="internal-profile-pic" src={userProfilePic} alt="ProfilePicture" />                 
                </div>
                <div>
                    <div className='vertIcon-div'>
                      <Tooltip title={<h3 style={{ margin: '0px' }}>delete</h3>} placement="bottom">
                        <DeleteForeverIcon
                          sx={{ 
                            padding: '12px', 
                            cursor: 'pointer', 
                            borderRadius: '100%',
                            color: '#8f8f8f',
                            '&:hover': {
                              backgroundColor: '#e1e1e1',
                              color: '#f74242'
                            }
                          }}
                          aria-label="cart"
                          onClick={handleDelete}
                        />
                      </Tooltip> 
                    </div> 
                    <div className='horizIcon-div'>
                      <Tooltip title={<h3 style={{ margin: '0px' }}>delete</h3>} placement="top">
                        <DeleteForeverIcon 
                          sx={{ 
                            padding: '12px', 
                            cursor: 'pointer', 
                            borderRadius: '100%',
                            color: '#8f8f8f',
                            '&:hover': {
                              backgroundColor: '#e1e1e1',
                              color: '#f74242'
                            }
                          }}
                          aria-label="cart"
                          onClick={handleDelete}
                        />
                      </Tooltip>
                    </div>       
                  </div>          
                </div>
                <div className='preview-div-right'>
                  <div className='comment-as-div-and-more-icon'>
                    <div className='comment-as-div'>
                      reviewed as <NavLink end to="/Profile"><span className='comment-as'>{username}</span></NavLink>
                    </div>
                  </div>
                  <InternalPreview movieId={movieIdConst}/>  
                </div>             
                
            </>
            ) : (<>
            {successfulLoad ? (
              <div className='internal-loading'>
                <Loading />
              </div>  
              ) : (
              <>
                <div className="internal-pfp-div">
                  <img className="internal-profile-pic" src={userProfilePic} alt="ProfilePicture" />               
                </div>
                <div className='new-review-div'>
                    { renderInFail &&
                        <div className="internal-review-alert-div">         
                            <Alert 
                            variant="outlined" 
                            severity="error" 
                            sx={{
                                color: 'white', backgroundColor: 'rgb(105, 0, 0)', 
                                paddingTop: '15px', paddingBottom: '15px', paddingLeft: '30px', paddingRight: '40px',
                                width: '50%',
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

                    <div className='comment-as-div'>
                        comment as <NavLink end to="/Profile"><span className='comment-as'>{username}</span></NavLink>
                    </div>
                    <div className='internal-comment-div-info'>
                        <InternalReviewPage />
                        <div className='internal-btn'>
                            <Button 
                            sx={{
                                backgroundColor: buttonColor,
                                color: changeToWhite ? '#fff' : '#2c323a',
                                '&:hover': {
                                    backgroundColor: enableHover ? '#e1e1e1' : buttonColor,
                                    color: changeToWhite ? '#fff' : '#1976d2'
                                },
                                padding: '8px',
                                borderBottomRightRadius:'0px',
                                borderBottomLeftRadius:'0px'
                            }}
                            onClick={handleSubmit}
                            className={buttonClass}
                            type="submit"
                            >
                                Post
                            </Button>
                        </div>
                    </div>
                </div>
              </>)
            }
          </>)}
        </div>
    </div>
  );
}

export default InternalReview;