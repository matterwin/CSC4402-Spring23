import React from 'react';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

import './ProfileReviewCard.css'

function ProfileReviewCard() {

  return (
    <div >
        <div className="profile-container">
            <div className='box-card'>
                <AddToPhotosIcon sx={{ fontSize: 47 }} />
                <h1 className='tit-of-card'>Demo review</h1>
                <p className='msg-of-card'>This Review is created as demo</p>
                <div className='space-for-card'>&nbsp;</div>
                <p className='update-of-card'>Updated today at 9:00 PM</p>
            </div>
        </div>
    </div>
  );
}

export default ProfileReviewCard;
