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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import deleteReview from './ReviewHooks/deleteReview';

function InternalReview(props) {
    const [open, setOpen] = useState(false);
    const userId = readCookies();
    const movieIdConst = props.movieId;
    const setMovieReviews = props.setMovieReviews;
    const setMovie = props.setMovie;
    const flag = getShowPreview();
    const [username, setUsername] = useState('');
    const [userProfilePic, setUserProfilePic] = useState("");
    const [renderInFail, setRenderInFail] = useState(false);
    const [buttonClass, setButtonClass] = useState("");
    const [buttonColor, setButtonColor] =  useState("#dae9f8");
    const [enableHover, setEnableHover] = useState(true);
    const [changeToWhite, setChangeToWhite] = useState(false);
    const [successfulLoad, setSuccessfulLoad] = useState(false);
    const [showPreview, setShowPreview] = useState(flag);
    const [successDeleteAlert, setSuccessDeleteAlert] = useState(false);

    const handleClose = () => {
      updateDelDisplay(false);
      setOpen(false);
    };
  
    const handleDelete = () => {
      setOpen(true);
    };

    const handleActualDelete = () => {
      deleteReview(movieIdConst, setMovieReviews);
      handleClose();
      setShowPreview(false);
      setTimeout(() => {
        fetch(`http://localhost:8000/api/movieControllerWithAvg/${movieIdConst}`)
          .then(res => res.json())
          .then(json => setMovie(json))
          .catch(err => console.error(err));   
      }, 10);
      return;
    };

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
        setButtonColor("#dae9f8");
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
        if(statusCode === '200') {
          handleSuccess();
          setTimeout(() => {
            fetch(`http://localhost:8000/api/movieReviewControllerWithUser/${props.movieId}`)
            .then(res => res.json())
            .then(json => setMovieReviews(json))
            .catch(err => console.error(err));
          }, 1000);
          setTimeout(() => {
          fetch(`http://localhost:8000/api/movieControllerWithAvg/${movieIdConst}`)
            .then(res => res.json())
            .then(json => setMovie(json))
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
      updateMovieId(props.movieId);
    },[props.movieId])

  return (
    <div>
        <div className='internal-comment-div'>
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{
              maxWidth: '300px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <DialogTitle id="alert-dialog-title" sx={{ fontSize: '1.1rem' }}>
              {"Fair warning"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description" sx={{ fontSize: '1rem' }}>
                Are you sure you want to delete your review?
              </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ backgroundColor: '#e4e6e7', }}>
              <Button 
                onClick={handleClose} 
                sx={{
                  '&:hover': {
                      backgroundColor: '#cccccc;',
                      color: "#1976d2"
                  },
                  borderRadius: '20px'
                }}
              >
                Cancel
              </Button>
              <Button 
                onClick={handleActualDelete} 
                sx={{
                  backgroundColor: '#1976d2',
                  color: "#fff",
                  border: '0.5px solid #1976d2',
                  '&:hover': {
                      backgroundColor: '#f74242',
                      color: "#fff",
                      border: '0.5px solid #f74242',
                  },
                  borderRadius: '20px',
              }}
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </div>
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
                  <InternalPreview movieId={movieIdConst} />  
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
                    {successDeleteAlert && 
                      <div className="alert-container">
                        <Alert 
                          severity="success" 
                          color="info"
                        >
                          Successfully deleted
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
                                    backgroundColor: enableHover ? '#a3c7eb' : buttonColor,
                                    color: changeToWhite ? '#fff' : '#fff'
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