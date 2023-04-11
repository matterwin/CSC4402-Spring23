import React, { useState, useEffect } from 'react';
import './UserMovieReviews.css';
import readCookies from '../../Hooks/readCookies';
import Loading from '../Loading/Loading';
import updateNumOfReviews from './ReviewAmountHooks/updateNumOfReviews';

export default function UserMovieReviews() {
    const [movieReviews, setMovieReviews] = useState(undefined);
    const [amountOfReviews, setAmountOfReviews] = useState(-1);
    const userId = readCookies();

    useEffect(() => {
        if (amountOfReviews > 0) {
            // console.log("has at least 1 review");
            updateNumOfReviews(amountOfReviews);
        }
        else
            console.log("no reviews");

    },[amountOfReviews])

    useEffect(() => {
        fetch(`http://localhost:8000/api/movieReviewControllerAll`)
        .then(res => res.json())
        .then(json => {
            const filteredReviews = json.filter(review => parseInt(review.userId) === parseInt(userId));
            setMovieReviews(filteredReviews);
            // console.log(filteredReviews);
            // if (filteredReviews.length > 0) {
            //     console.log("has at least 1 review");
            // }
            setAmountOfReviews(filteredReviews.length);
        })
        .catch(err => console.error(err));
    }, [userId]);

    if(!movieReviews) {
        return (
            <div className='loading'>
                <Loading />
            </div>
        );
    }    

  return (
    <div>
      {movieReviews.map(movieReviews => (
        <div key={movieReviews.movieId}>
          <h3>{`Movie ID: ${movieReviews.movieId}`}</h3>
          <p>{`Review: ${movieReviews.review}`}</p>
          <p>{`Rating: ${movieReviews.rating}`}</p>
        </div>
      ))}
    </div>
  );
}

