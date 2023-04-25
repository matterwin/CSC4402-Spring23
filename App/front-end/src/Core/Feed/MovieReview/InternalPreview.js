import * as React from 'react';
import { useEffect, useState } from 'react';
import readCookies from '../../../Hooks/readCookies';
import './UserReviews.css';
import './InternalPreview.css';
import StarIcon from '@mui/icons-material/Star';
import Tooltip from '@mui/material/Tooltip';
import updateShowPreview from './ReviewHooks/updateShowPreview';

export default function InternalPreview(props) {
    const userId = readCookies();
    const movieId = props.movieId;
    const [movieReviews, setMovieReviews] = useState([]); 
     
    useEffect(() => {
        const url = `http://localhost:8000/api/movieReviewController?userId=${userId}&movieId=${movieId}`;
        fetch(url)
          .then(res => res.json())
          .then(json => setMovieReviews(json))
          .catch(err => console.error(err));
        if(movieReviews.review === undefined)
          updateShowPreview(false);
    },[movieId, userId])
    
    return (
        <div className='comment-div-info'>
            <div className='desc'>
                {movieReviews.review}
            </div>
            <div className='usr-rating'>
              <Tooltip title={<h3 style={{ margin: '0px' }}>{`${movieReviews.rating} out of 5`}</h3>}>
                <div className='rating-div'>
                  <div className='rating-inline'>
                    { movieReviews.rating }
                    <StarIcon sx={{ color: '#1976d2', fontSize: '18px' }}/>
                  </div>
                </div>
              </Tooltip> 
            </div>
        </div>
    );
}
