import React, { useState, useEffect } from 'react';
import './UserMovieReviews.css';
import Loading from '../Loading/Loading';
import updateNumOfReviews from './ReviewAmountHooks/updateNumOfReviews';
import Unknown from '../Videos/superbad.jpg';
import SmallStar from '../Feed/SmallStar';
import DefaultPic from "../Videos/defaultPic.png";
import { useNavigate } from "react-router-dom";
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import Button from '@mui/material/Button';

export default function UserMovieReviews(props) {
    const [movieReviews, setMovieReviews] = useState(undefined);
    const [movies, setMovies] = useState(undefined);
    const [userInfo, setUserInfo] = useState(undefined);
    const [amountOfReviews, setAmountOfReviews] = useState(-1);
    const userId = props.userId;
    const colorBorder = props.colorPick;
    const navigate = useNavigate();

    useEffect(() => {
        if (amountOfReviews > 0)
            updateNumOfReviews(amountOfReviews);
    },[amountOfReviews])

    useEffect(() => {
      fetch('http://localhost:8000/api/movieControllerFeed')
        .then(res => res.json())
        .then(json => setMovies(json))
        .catch(err => console.error(err));
    }, []);

    useEffect(() => {
      const url = `http://localhost:8000/api/userAuthControllerInfo?id=${userId}`;
      fetch(url)
      .then(res => res.json())
      .then(json => setUserInfo(json))
      .catch(err => console.error(err));
    },[userId])


    useEffect(() => {
      fetch(`http://localhost:8000/api/movieReviewControllerAll`)
      .then(res => res.json())
      .then(json => {
          const filteredReviews = json.filter(review => parseInt(review.userId) === parseInt(userId));
          const filteredMovieIds = filteredReviews.map(review => review.movieId);
          const matchingMovies = movies.filter(movie => filteredMovieIds.includes(movie.id));
          setMovieReviews(filteredReviews);
          setAmountOfReviews(filteredReviews.length);
          setMovies(matchingMovies);
      })
      .catch(err => console.error(err));
    }, [userId, movies]);

    if(!movieReviews) {
      return (
        <div className='loading'>
            <Loading />
        </div>
      );
    }    

    if(!movies) {
      return (
        <div className='loading'>
          <Loading />
        </div>
      );
    }

    if(amountOfReviews < 1) {
      return (
        <div className='no-vid-msg'>
          <div className='no-vid-div'>
            <TheaterComedyIcon sx={{ fontSize: 50, color: '#1d1d20' }}/>
            <p className='h1-msg'>You don't have any Movie Reviews</p>
            <p className='p-msg'>Add a new Movie Review by clicking the button down below</p>      
            <Button 
              sx={{
                backgroundColor: '#fff',
                border: '0.5px solid #2a3038',
                '&:hover': {
                  backgroundColor: '#A1C7ED',
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.6)",
                  color: "#1976d2"
                }
              }}
              href="/Rate&Review/create"
            >
                  RATE A MOVIE
            </Button>
          </div> 
        </div>
      );
    }

  const reviewsJsx = movieReviews.map((movieReview) => {
    const movie = movies.find((m) => m.id === movieReview.movieId);
  
    return (
      <div className="comment-div-rr" key={movieReview.movieId}>
        <div className="left-div-rr">
          <div
            className="comment-pfp-div-rr"
            style={{ borderColor: colorBorder }}
          >
            <img
              className="profile-pic-rr"
              src={DefaultPic}
              alt="ProfilePicture"
            />
          </div>
        </div>
        <div>
          <div className="comment-div-info-rr">
            <div className="username-rr">{userInfo.username}</div>
            <div className="desc-rr">{movieReview.review}</div>
            <div className="usr-rating-rr">
              <div className="rating-div-rr">
                <div className="rating-inline-rr">
                  <p>{movieReview.rating}</p>
                  <SmallStar />
                </div>
              </div>
            </div>
            {movie && (
              <div className='container-rr'>
                <div className='row-rr'>
                  <div className='pic-rr-div'>
                    <img
                      src={movie.filepath}
                      alt={movie.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = Unknown;
                      }}
                      className="movie-pic-rr"
                      onClick={() => navigate(`/Feed/Movie?id=${movieReview.movieId}`)}
                    />
                  </div>
                  <div className='info-right'>
                    <div className="movie-title-rr">
                      { movie.name }
                    </div>
                    <div className="last-review-rr">
                      { movie.releaseDate }
                    </div>
                    <div className='rating-rr'>
                      <div>
                        <SmallStar />
                      </div>
                      <div className="percentage-rr">
                        {(movie.avg / 5 * 100).toFixed(0)}%
                      </div>
                    </div>              
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className='container-personal-review'>
      { reviewsJsx }
    </div>
  );
}

