import * as React from 'react';
import Pika from "../Videos/pika.png";
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import UploadButtons from './UploadButtons';


import './UserSettings.css'

function UserSettings() {

  return (
    <div className='profile-container'>
        <div className="setting-info-title">
          <h2 className='reviews'>Profile Settings</h2>
        </div>
        <div className="setting-info">
            <div className='settings-pic-div'>
                <div className="settings-pfp-div">             
                    <Tooltip title="Profile pic">
                        <img className="prof-profile-pic" src={Pika} alt="ProfilePicture" />      
                    </Tooltip>                            
                </div>
                <div className='upload-btn'>
                  <UploadButtons />
                </div>
            </div>
            
            <div className='small-info'>
                <div className='settings-small-row'>
                  <TextField id="outlined-basic" placeholder='Full name' variant="outlined" />
                   
                </div>
                <div className='settings-small-row'>
                  <TextField id="outlined-basic" placeholder='Tell us what movies interest you' variant="outlined" />
                </div>
                
            </div>
        </div> 
        <div className="setting-info">
              <h2 className='reviews'>Change username</h2>
        </div>
    </div>
  );
}

export default UserSettings;
