import React from 'react';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import Button from '@mui/material/Button';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { NavLink } from "react-router-dom";

import './Profile.css'

function Profile() {

  return (
    <div >
        <div className="profile-container">
            <div className='no-vid-msg'>
                <TheaterComedyIcon sx={{ fontSize: 50, color: '#1d1d20' }}/>
                <p className='h1-msg'>You don't have any Movie Reviews</p>
                <p className='p-msg'>Add a new Movie Review by clicking the button down below</p>
                <NavLink className="title" end to="/RateReview">
                    <Button 
                        variant="outlined" 
                        startIcon={<AddToPhotosIcon  />}
                        style={{ backgroundColor: '#e7e7e7' }}
                    >
                        Rate A Movie
                    </Button>
                </NavLink>
                <div>&nbsp;</div>
                <div className='box-card'>
                   <AddToPhotosIcon sx={{ fontSize: 47 }} />
                   <h1 className='tit-of-card'>Demo project</h1>
                   <p className='msg-of-card'>This Review is created as demo</p>
                   <div className='space-for-card'>&nbsp;</div>
                   <p className='update-of-card'>Updated today at 9:00 PM</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Profile;
