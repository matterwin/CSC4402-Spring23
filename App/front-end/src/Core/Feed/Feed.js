import React from 'react';

import FeedBar from './FeedNav'
import './Feed.css'

function Feed() {

  return (
    <div>
        <FeedBar />
        <div className="feed-container">
            <p className='hello-there'>Feed</p>
            <div className='space'>&nbsp;</div>
            <div className='space'>&nbsp;</div>
            <div className='space'>&nbsp;</div>
        </div>
        <div className='space'>&nbsp;</div>
    </div>
  );
}

export default Feed;