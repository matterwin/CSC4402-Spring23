import { rating } from './updateRating';

export default function getMovieId() {
    // console.log('MovieId in getMovieId function:', rating);

    const ratingOutOfFive = (rating / 100 * 5).toFixed(1);

    // console.log(' ratingOutOfFive    ',  ratingOutOfFive);
    return ratingOutOfFive;
}
