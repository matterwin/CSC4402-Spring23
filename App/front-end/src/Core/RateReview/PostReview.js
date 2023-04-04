import readCookies from '../../Hooks/readCookies';

function PostReview(movieId, review, rating) {

    const userId = readCookies();
    const initialState = {
        movieId: -1,
        userId: userId,
        review: "",
        rating: 1
    };
   
}

export default PostReview;
