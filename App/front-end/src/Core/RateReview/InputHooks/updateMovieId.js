import getMovieId from './getMovieId';
export let movieId = 0;

export default function updateMovieId(data) {
    movieId = data;
    getMovieId();
}
