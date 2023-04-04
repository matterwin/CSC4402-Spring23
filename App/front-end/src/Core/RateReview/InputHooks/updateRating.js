import getRating from './getRating';
export let rating = '';

export default function updateRating(data) {
    rating = data;

    getRating();
}
