import readCookies from '../../../Hooks/readCookies';

export default function getReviewCountForProfile() {
  const userId = readCookies();

  return fetch(`http://localhost:8000/api/movieReviewControllerAll`)
    .then(res => res.json())
    .then(json => {
      const filteredReviews = json.filter(review => parseInt(review.userId) === parseInt(userId));
      const amountOfReviews = parseInt(filteredReviews.length);
      return amountOfReviews;
    })
    .catch(err => console.error(err));
}
