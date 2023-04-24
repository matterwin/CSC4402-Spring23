import React from 'react';
import { useEffect, useState } from 'react';
import DefaultPic from "../../Videos/defaultPic.png";
import Tooltip from '@mui/material/Tooltip';
import Loading from '../../Loading/Loading'
import StarIcon from '@mui/icons-material/Star';
import InternalReview from './InternalReview';
import readCookies from '../../../Hooks/readCookies';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteAlert from './DeleteAlert';
import updateDelDisplay from './ReviewHooks/updateDelDisplay';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import updateShowPreview from './ReviewHooks/updateShowPreview';
// import getDelDisplay from './ReviewHooks/getDelDisplay';
import './UserReviews.css'

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    border: '1px solid #fff',
    marginTop: theme.spacing(1),
    width: 10,
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[0],
    backgroundColor: '#3b4048',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      color: '#fff',
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
      '&:hover': {
        backgroundColor: '#1976d2',
        color: 'white',
      },
    },
  },
}));

function UserReviews(props) {
  const [movieReviews, setMovieReviews] = useState(undefined); 
  const userId = readCookies();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [hoverOrNot, setHoverOrNot] = useState(false);

  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorEl(null);
  };

  const handleDelete = () => {
    handleClose();
    updateDelDisplay(true);
  }

  useEffect(() => {
    console.log("test")
    fetch(`http://localhost:8000/api/movieReviewControllerWithUser/${props.movieId}`)
    .then(res => res.json())
    .then(json => setMovieReviews(json))
    .catch(err => console.error(err));
  }, [props]);
  
  if(!movieReviews) {
    return(
      <div className='loading'>
        <Loading />
      </div>
    );
  }

  function createDate(rawDate) {
    const currentDate = new Date();
    const reviewDate = new Date(rawDate);
    const offset = reviewDate.getTimezoneOffset() * 60 * 1000; // offset in milliseconds
    const reviewDateWithOffset = new Date(reviewDate.getTime() - offset); // adjust review date with offset
    var diffInTime = (currentDate.getTime() - reviewDateWithOffset.getTime()) * -1;
  
    if(diffInTime < 0) diffInTime *= -1

    const diffInYears = Math.floor(diffInTime / (1000 * 3600 * 24 * 365.25));
    const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
    const diffInHours = Math.floor(diffInTime / (1000 * 3600));
    const diffInMinutes = Math.floor(diffInTime / (1000 * 60));
    const diffInSeconds = Math.floor(diffInTime / 1000);
  
    if (diffInYears > 0) {
      return `${diffInYears} yr${diffInYears !== 1 ? 's' : ''} ago`;
    } else if (diffInDays > 0) {
      return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
    } else if (diffInHours > 0) {
      return `${diffInHours} hr${diffInHours !== 1 ? 's' : ''} ago`;
    } else if (diffInMinutes > 0) {
      return `${diffInMinutes} min${diffInMinutes !== 1 ? 's' : ''} ago`;
    } else {
      return `${diffInSeconds} sec${diffInSeconds !== 1 ? 's' : ''} ago`;
    }
  }

  const reviewsJsx = movieReviews.map((movieReview, index) => {
    const ratingToolTip = `${movieReview.rating} out of 5`
    const checkUserIds = (parseInt(movieReview.userId) === parseInt(userId));
    if(checkUserIds) updateShowPreview(true);
    const borderColor = checkUserIds ? 'black' : '#1976d2';
    const cursor = checkUserIds ? 'pointer' : '';
    const alterBg = index % 2 ? '#fff' : '#dae9f8';

    const diff = createDate(movieReview.date);

    return (
      <div 
        key={ movieReview.userId } 
        className='comment-div' 
        style={{ backgroundColor: checkUserIds ? '#f3f3f3' : alterBg }}
        onMouseOver={checkUserIds ? (() => setHoverOrNot(true)) : (() => {})}
        onMouseOut={checkUserIds ? (() => setHoverOrNot(false)) : (() => {})}
      >
        <div className='left-div'>
          <div className="comment-pfp-div" style={{ borderColor: borderColor }}>
          { checkUserIds ? 
            <> 
              <img className="profile-pic" src={ DefaultPic } alt="ProfilePicture" />      
            </> : 
            <>
              <img className="profile-pic" src={ DefaultPic } alt="ProfilePicture" />        
          </>
          }       
          </div>
          { checkUserIds && 
            <div style={{ position: 'relative' }} className={ hoverOrNot ? '' : 'hide-more-icon' }> 
              <div
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                onClick={handleClick} 
              >   
                <div className='vertIcon-div'>
                <Tooltip title={<h3 style={{ margin: '0px' }}>Options</h3>}>
                    <MoreVertIcon 
                      sx={{ 
                      padding: '12px', 
                      cursor: 'pointer', 
                      borderRadius: '100%',
                      color: '#8f8f8f',
                      '&:hover': {
                        backgroundColor: '#e1e1e1'
                      }
                      }}
                      aria-label="cart"
                    />
                    </Tooltip>
                </div> 
                <div className='horizIcon-div'>
                    <MoreHorizIcon 
                      sx={{ 
                      padding: '12px', 
                      cursor: 'pointer', 
                      borderRadius: '100%',
                      color: '#646464',
                      '&:hover': {
                        backgroundColor: '#e1e1e1'
                      }
                      }}
                      aria-label="cart"
                    />
                </div>          
              </div>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                disableScrollLock={false} 
              >
                {/* <MenuItem onClick={handleClose} disableRipple>
                  Edit
                </MenuItem> */}
                <MenuItem onClick={handleDelete} disableRipple>
                  Delete
                </MenuItem>
              </StyledMenu>
            </div>
          }
        </div>
          <div className='comment-div-info' style={{ borderColor: borderColor, cursor: cursor }}>
            <div className='username-date-div'>
              <div className='username'>
                { movieReview.username }
              </div> 
              <div className='date'>
                &nbsp;&nbsp;{ diff }
              </div>
            </div>
            <div className='desc'>
                { movieReview.review }
            </div>
            <div className='usr-rating'>
              <Tooltip title={<h3 style={{ margin: '0px' }}>{ratingToolTip}</h3>}>
                <div className='rating-div'>
                  <div className='rating-inline'>
                    { movieReview.rating }
                    <StarIcon sx={{ color: '#1976d2', fontSize: '18px' }}/>
                  </div>
                </div>
              </Tooltip> 
            </div>
          </div>
      </div>
    );
  });

  return (
    <div>
      <div className='comment-container'>
        <div className='comment-flex-box'>
          <h2 className='reviews-heading'>Reviews •&nbsp;{movieReviews.length} </h2>
          { <DeleteAlert deleteMovieId={props.movieId}/> }
          { readCookies() && <InternalReview movieId={props.movieId} moviesReviews={ movieReviews } setMovieReviews={ setMovieReviews } /> }
          { reviewsJsx }
        </div>
      </div>
    </div>
  );
}

export default UserReviews;
