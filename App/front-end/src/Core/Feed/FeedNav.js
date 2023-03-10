import React from 'react';

import './FeedNav.css'
import Button1 from './Button1'
import Button2 from './Button2'
import Button3 from './Button3'

function Feed() {

  return (
    <div>
        <div className="feed-bar">
            <div className='buttons'>
                <Button1 variant="contained" color="primary" disableElevation />
            </div> 
            <div className='buttons'>
                <Button2 variant="contained" color="primary" disableElevation />
            </div>
            <div className='buttons'>
                <Button3 variant="contained" color="primary" disableElevation />
            </div>
        </div>
    </div>
  );
}

export default Feed;