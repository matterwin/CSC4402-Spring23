import getUserId from "../../Profile/OtherHooks/getUserId";

export default function getReviewCountForProfile() {
  const userId = getUserId();

  return fetch(`http://localhost:8000/api/movieReviewControllerAll`)
    .then(res => res.json())
    .then(json => {
      const filteredReviews = json.filter(review => parseInt(review.userId) === parseInt(userId));
      const amountOfReviews = parseInt(filteredReviews.length);
      return amountOfReviews;
    })
    .catch(err => console.error(err));
}
