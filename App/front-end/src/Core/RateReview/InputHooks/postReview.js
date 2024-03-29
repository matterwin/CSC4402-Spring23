import readCookies from '../../../Hooks/readCookies';
import getMovieId from './getMovieId';
import getRating from './getRating';
import getReview from './getReview';

function postReview() {
    const userId = readCookies();
    let statusCode = 0;

    const userInputData = {
        movieId: getMovieId(),
        userId: userId,
        review: getReview(),
        rating: getRating()
    };

    const url = `http://localhost:8000/api/movieReviewController`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInputData)
    };

    return fetch(url, options)
    .then(response => {
        statusCode = response.status;

        if (response.status === 400) {
          throw new Error("400 Bad Request");
        }
        else if (response.status === 200) {
            // console.log("200 Success");
        }
        else if (response.status === 403) {
            throw new Error("403 Forbidden");
        }
        return statusCode.toString();
      })
    .catch(error => {
        console.error(error);
        return statusCode.toString();
    });

    
}

export default postReview;
