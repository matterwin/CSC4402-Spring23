import React from 'react';
import './FeedNav.css'
import Sort from './Sort'

function FeedNav() {
  return (
    <div>
        <div className="feed-bar-actual">
            <div className='buttons'>
                <Sort />
            </div>
            {/* <div onClick={handleReset} className='reset'>
                <p>RESET</p>
            </div> */}
        </div>
    </div>
  );
}

export default FeedNav;
