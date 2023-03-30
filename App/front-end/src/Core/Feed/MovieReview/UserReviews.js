import React from 'react';
import { useEffect, useState } from 'react';
import readCookies from '../../../Hooks/readCookies';
import DefaultPic from "../../Videos/defaultPic.png";
import Tooltip from '@mui/material/Tooltip';

import './UserReviews.css'

function UserReviews(props) {
  const userId = readCookies(); //change this to something else i.e.,
  // const [reviewUserId, setReviewUserId] = useState(0);
  const [username, setUsername] = useState('');
  const [userProfilePic, setUserProfilePic] = useState("");
  const [movieReviews, setMovieReviews] = useState(undefined);

  useEffect(() => {
    fetch(`http://localhost:8000/api/movieReviewControllerWithUser/${props.movieId}`)
    .then(res => res.json())
    .then(json => setMovieReviews(json))
    .catch(err => console.error(err));
  }, [props]);

  //2nd fetch looks up the specific userId of review, and saves the user's profile pic and username
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
      console.log("Error: " + error.message);
    });

  },[userId])

  if(!username || !userProfilePic || !movieReviews) {
    return (
      <h1>Loading</h1>
    );
  }

  const reviewsJsx = [];

  movieReviews.forEach((movieReview) => {
    console.log(movieReview);
    reviewsJsx.push(
            <div key={ movieReview.userId } className='comment-div'>
              <div className="comment-pfp-div">
                  <Tooltip title={ movieReview.username }>
                      <img className="profile-pic" src={userProfilePic} alt="ProfilePicture" />      
                  </Tooltip>            
              </div>  
              <div>
                <div className='comment-div-info'>
                  <div className='username'>
                    { movieReview.username }
                  </div> 
                  <div className='desc'>
                      { movieReview.review }
                  </div>
                  <div className='usr-rating'>
                    <b>Rating:&nbsp;</b> { movieReview.rating } 
                  </div>
                </div>
              </div>
      </div>
    );
  });

  return (
    <div>
      <div className='comment-container'>
          <div className='comment-flex-box'>
            <h2 className='reviews-heading'>Reviews</h2>
            { reviewsJsx }
          </div>
        </div>
    </div>
  );
}

export default UserReviews;
