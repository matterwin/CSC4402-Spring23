import readCookies from "../../../../Hooks/readCookies";

export default function deleteReview(movieId) {
    const userId = readCookies();
    console.log("UserId: " + userId + "       MovieId: " + movieId);

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
        if (response.status === 400) {
          throw new Error("400 Bad Request");
        }
        else if (response.status === 204) {
            alert("204 No Content");
        }
        else if (response.status === 404) {
            throw new Error("404 Not Found");
        }
      })
    .catch(error => {console.error(error);});
}
