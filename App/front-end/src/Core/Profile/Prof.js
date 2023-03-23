import * as React from 'react';
import Pika from "../Videos/pika.png";
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import ReviewsIcon from '@mui/icons-material/Reviews';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

import './Prof.css'

function Prof() {

  return (
    <div className='profile-container'>
        <div className="profile-info">
            <div className='pic-and-name'>
                <div className="prof-pfp-div">             
                    <Tooltip title="Profile">
                        <img className="prof-profile-pic" src={Pika} alt="ProfilePicture" />      
                    </Tooltip>             
                </div>
                <div>
                    <h1 className='prof-username'>noahlewis</h1>
                </div>
            </div>
            
            <div className='edit-button-div'>
                <NavLink end to="/Settings">
                    <Button 
                        sx={{
                            backgroundColor: '#A1C7ED',
                            width: '100%',
                            border: '0.5px solid #2a3038',
                        }}
                    >
                        Edit Profile
                    </Button>
                </NavLink>
                
            </div>
            <div className='small-info'>
                <div className='small-row'>
                    <Tooltip title="Reviews">
                        <ReviewsIcon sx={{color: '#2a3038'}}/></Tooltip>
                        <p>0</p>
                    
                </div>
                <div className='small-row'>
                    <VerifiedUserIcon sx={{color: '#2a3038'}}/>
                    <p>@noahlewis</p>
                </div>
                
            </div>
            
        </div>
        <div className="profile-info">
            
            <h2 className='reviews'>Reviews</h2>

        </div>        
    </div>
  );
}

export default Prof;
