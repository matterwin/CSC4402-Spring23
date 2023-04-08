import * as React from 'react';
import { useEffect, useState } from 'react';
import readCookies from '../../../Hooks/readCookies';
// import getMovieId from '../../RateReview/InputHooks/getMovieId';

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
  
    },[movieId, userId])
   
    return (
        <div>
            UserId: {movieReviews.userId}
            MovieId: {movieReviews.movieId}
            Review: {movieReviews.review}
            Rating: {movieReviews.rating}
        </div>
    );
}