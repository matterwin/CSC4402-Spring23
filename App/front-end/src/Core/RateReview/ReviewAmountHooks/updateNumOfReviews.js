import getNumOfReviews from './getNumOfReviews';
export let amountOfReviews = 0;

export default function updateNumOfReviews(data) {
    amountOfReviews = data;
    getNumOfReviews();
}