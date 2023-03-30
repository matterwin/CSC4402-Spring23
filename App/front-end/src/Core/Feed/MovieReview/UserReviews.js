import React from 'react';
import { useEffect, useState } from 'react';
import DefaultPic from "../../Videos/defaultPic.png";
import Tooltip from '@mui/material/Tooltip';

import './UserReviews.css'

function UserReviews(props) {
  const [movieReviews, setMovieReviews] = useState(undefined);

  useEffect(() => {
    fetch(`http://localhost:8000/api/movieReviewControllerWithUser/${props.movieId}`)
    .then(res => res.json())
    .then(json => setMovieReviews(json))
    .catch(err => console.error(err));
  }, [props]);

  if(!movieReviews) {
    return(
      <h1>Loading</h1>
    );
  }

  const reviewsJsx = [];

  movieReviews.forEach((movieReview) => {
    reviewsJsx.push(
            <div key={ movieReview.userId } className='comment-div'>
              <div className="comment-pfp-div">
                  <Tooltip title={ movieReview.username }>
                      <img className="profile-pic" src={ DefaultPic } alt="ProfilePicture" />      
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
