import getReview from './getReview';
export let review = '';

export default function updateRating(data) {
    review = data;

    getReview();
}