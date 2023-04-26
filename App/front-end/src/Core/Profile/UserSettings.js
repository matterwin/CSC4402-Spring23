import * as React from 'react';
import { useEffect, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import UploadButtons from './UploadButtons';
import readCookies from '../../Hooks/readCookies';
import DefaultPic from "../Videos/defaultPic.png";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Loading from '../Loading/Loading';

import './UserSettings.css'

function UserSettings() {
  const userId = readCookies();
  const [userProfilePic, setUserProfilePic] = useState("");
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState(undefined);
  const [updatedUserData, setUpdatedUserData] = useState({});

  useEffect(() => {
    if(!readCookies())
      window.location.href = "/Login";
  },[])

  useEffect(() => {

    const url = `http://localhost:8000/api/userAuthControllerInfo?id=${userId}`;

    fetch(url)
    .then(response => {
      if (response.status === 404) {
        throw new Error("User not found");
      }
      return response.json();     
    })
    .then(data => {
      console.log(data);
      if(data) { 
        setUserData(data);
        if(data.url == null)
          setUserProfilePic(DefaultPic);
      }
    })
    .catch(err => console.error(err));
  },[userId])

  if(!userData) {
    return (
      <div className='contain'>      
          <div className="setting-info-title">
            <h2 className='reviews'>Profile Settings</h2>
          </div>
          <div className="setting-info">
              <div className='settings-pic-div'>
                  <div className="settings-pfp-div">             
                      <Tooltip title="Profile pic">
                          <img className="prof-profile-pic" src={DefaultPic} alt="ProfilePicture" />      
                      </Tooltip>                            
                  </div>
                  <div className='upload-btn'>
                    <UploadButtons />
                  </div>
              </div>
          <div className='loading-usr-settings'>
            <Loading />
          </div>
            <h2 className='reviews'>Confirmation</h2>
            <Button variant="contained" 
              sx={{ 
                  backgroundColor: '#689acc',
                  paddingRight: '30px', 
                  paddingLeft: '30px', 
                  paddingTop: '7px', 
                  paddingBottom: '7px',
                  border: '1px solid #fff',
                  '&:hover': {
                      backgroundColor: '#1976d2',
                  }
              }}
              >
                Change
            </Button>
          </div>
      </div>
    );
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmChange = () => {
    setOpen(false);

    console.log(updatedUserData)
    const url = `http://localhost:8000/api/userAuthController/${userId}`;
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: updatedUserData
    };

    return fetch(url, options)
    .then(response => {
        // statusCode = response.status;

        if (response.status === 400) { 
          alert("400 Bad Request"); //means info inputted is not unique
        }
        else if (response.status === 200) {
          // alert("200 Success");
          window.location.reload();
        }
        else if (response.status === 403) {
            throw new Error("403 Forbidden");
        }
        // return statusCode.toString();
        return;
      })
    .catch(error => {
        console.error(error);
        // return statusCode.toString();
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    let username = data.get('username');
    let email = data.get('email');
    let password = data.get('password');

    const userData = {
      username,
      email,
      password
    };
    
    setUpdatedUserData(JSON.stringify(userData));
  };
    
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          maxWidth: '300px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center'
        }}
        disableScrollLock={true}
      >
        <DialogTitle id="alert-dialog-title" sx={{ fontSize: '1.1rem' }}>
          {"Fair warning"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{ fontSize: '1rem' }}>
            Changing might result in unexpected effects but do you
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: '#e4e6e7', }}>
          <Button 
            onClick={handleClose} 
            sx={{
              '&:hover': {
                  backgroundColor: '#cccccc;',
                  color: "#1976d2"
              },
              borderRadius: '20px'
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleConfirmChange}
            sx={{
              backgroundColor: '#1976d2',
              color: "#fff",
              border: '0.5px solid #1976d2',
              '&:hover': {
                  backgroundColor: '#f74242',
                  color: "#fff",
                  border: '0.5px solid #f74242',
              },
              borderRadius: '20px',
          }}
          >
            Change
          </Button>
        </DialogActions>
      </Dialog>
      <div className='contain'>
        <div className="setting-info-title">
          <h2 className='reviews'>Profile Settings</h2>
        </div>
        <form onSubmit={handleSubmit}>
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
                <TextField 
                  id="filled-basic" 
                  name='username'
                  label="Username" 
                  variant="filled" 
                  // value={userData.username}
                  sx={{ 
                    border: '1px solid #858586' 
                  }}
                />
              </div>
              <div className='settings-small-row'>
                <TextField 
                id="filled-basic" 
                label="Email" 
                name='email'
                variant="filled" 
                // value={userData.email} 
                sx={{ 
                  border: '1px solid #858586' 
                }}
                />
              </div>
              <div className='settings-small-row'>
              <TextField 
                id="filled-basic" 
                label="Password"
                name='password'
                variant="filled" 
                // value={userData.password}
                sx={{ 
                  border: '1px solid #858586' 
                }}
              />
              </div>
            </div>              
          </div> 
          <div className="setting-info">
            <h2 className='reviews'>Confirmation</h2>
            <Button variant="contained" 
              onClick={handleOpen}
              type="Submit"
              sx={{ 
                  backgroundColor: '#689acc',
                  paddingRight: '30px', 
                  paddingLeft: '30px', 
                  paddingTop: '7px', 
                  paddingBottom: '7px',
                  border: '1px solid #fff',
                  '&:hover': {
                      backgroundColor: '#1976d2',
                  }
              }}
              >
                Change
            </Button>          
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserSettings;
