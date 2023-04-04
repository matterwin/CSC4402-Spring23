import React, { useEffect, useState } from 'react';
import readCookies from '../../Hooks/readCookies';

function PostReview() {

    const userId = readCookies();
    const initialState = {
        movieId: -1,
        userId: userId,
        review: "",
        rating: 0
    };
 
    const [data, setData] = useState(initialState);
    const url = `http://localhost:8000/api/movieReviewController`;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch(url, options)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error(error));

}

export default PostReview;
