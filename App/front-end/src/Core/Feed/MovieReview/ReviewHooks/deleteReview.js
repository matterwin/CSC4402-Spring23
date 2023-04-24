import readCookies from "../../../../Hooks/readCookies";
import updateShowPreview from "./updateShowPreview";

export default function deleteReview(movieId, setMovies) {
    const userId = readCookies();
    const setMovieReviews = setMovies;

    const reviewData = {
        userId: userId,
        movieId: movieId
    };

    const url = `http://localhost:8000/api/movieReviewController`;
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reviewData)
    };

    fetch(url, options)
    .then(response => {
        if (response.status === 400) throw new Error("400 Bad Request");
        else if (response.status === 204) {
            setTimeout(() => {
                fetch(`http://localhost:8000/api/movieReviewControllerWithUser/${movieId}`)
                .then(res => res.json())
                .then(json => setMovieReviews(json))
                .catch(err => console.error(err));
              }, 0); 
            updateShowPreview(false);
        }
        else if (response.status === 404) throw new Error("404 Not Found");
      })
    .catch(error => {console.error(error);});
}
