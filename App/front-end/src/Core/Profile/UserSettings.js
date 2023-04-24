import * as React from 'react';
import { useEffect, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import UploadButtons from './UploadButtons';
import readCookies from '../../Hooks/readCookies';
import DefaultPic from "../Videos/defaultPic.png";

import './UserSettings.css'

function UserSettings() {

  const userId = readCookies();
    const [username, setUsername] = useState('');
    const [userProfilePic, setUserProfilePic] = useState("");

    useEffect(() => {
      if(!readCookies())
        window.location.href = "/Login";
    },[])

    useEffect(() => {

      const url = `http://localhost:8000/api/userAuthControllerInfo?id=${userId}`;

      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (response.status === 404) {
          throw new Error("User not found");
        }
        return response.json();     
      })
      .then(data => {
        if(data) { 
          setUsername(data.username);
          if(data.url == null)
            setUserProfilePic(DefaultPic);
        }
      })
      .catch(error => {       
        console.error(error);
      });

    },[userId])

  return (
    <div className='contain'>
        <div className="setting-info-title">
          <h2 className='reviews'>Profile Settings</h2>
        </div>
        <div className="setting-info">
            <div className='settings-pic-div'>
                <div className="settings-pfp-div">             
                    <Tooltip title="Profile pic">
                        <img className="prof-profile-pic" src={userProfilePic} alt="ProfilePicture" />      
                    </Tooltip>                            
                </div>
                <div className='upload-btn'>
                  <UploadButtons />
                </div>
            </div>
            
            <div className='small-info'>
                <div className='settings-small-row'>
                  <TextField id="outlined-basic" label="Username" variant="outlined"  value={username} />
                </div>
                
                <div className='settings-small-row'>
                  <TextField id="outlined-basic" label='Bio' variant="outlined" />
                </div>
                <p className='settings-small-row'>Tell us about yourself ---- will change this ish later</p>
            </div>
        </div> 
        <div className="setting-info">
              <h2 className='reviews'>Change username</h2>
        </div>
    </div>
  );
}

export default UserSettings;
