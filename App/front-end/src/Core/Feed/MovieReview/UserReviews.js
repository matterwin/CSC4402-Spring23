import React from 'react';
import { useEffect, useState } from 'react';
import DefaultPic from "../../Videos/defaultPic.png";
import Tooltip from '@mui/material/Tooltip';
import Loading from '../../Loading/Loading'
import StarIcon from '@mui/icons-material/Star';
import InternalReview from './InternalReview';

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
      <div className='loading'>
        <Loading />
      </div>
    );
  }

  const reversedReviews = movieReviews.reverse();

  const reviewsJsx = [];

  reversedReviews.forEach((movieReview) => {
    const ratingToolTip = `${movieReview.rating} out of 5`
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
                    <Tooltip title={ratingToolTip}>
                      <div className='rating-div'>
                        <div className='rating-inline'>
                          <b>Rating:&nbsp;</b> { movieReview.rating }
                          <StarIcon sx={{ color: '#1976d2', fontSize: '18px' }}/>
                        </div>
                      </div>
                    </Tooltip> 
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
            <InternalReview movieId={props.movieId} />
            { reviewsJsx }
          </div>
        </div>
    </div>
  );
}

export default UserReviews;
