import React, { useEffect } from 'react';
import readCookies from '../Hooks/readCookies';
import Button from '@mui/material/Button';
import deleteCookies from '../Hooks/deleteCookies';
import LoadingPic from '../Core/LoadingScreen/LoadingPic';

import './Logout.css'

function Logout() {

    useEffect(() => {

        document.body.style.backgroundColor = '#2a3038';
        if(readCookies())
          console.warn("User signed in");
        else {
          window.location.href = "/Login";
        } 
    
      }, []);

    function handleLogOut() {
        deleteCookies();
      }

    return (
        <div>
            <div className='logout-container'>
                <div className='logout-logo'>
                    <LoadingPic />
                </div>
                <div className='logout-box'>
                    <div className='logout-flex'>
                        <div className='text-box'>
                            <div className='title-logout'>
                                Last chance:
                            </div>
                            <div className='msg-logout'>
                                You can log back in at anytime, and feel free to tell your friends to come review these dogshit movies
                            </div>
                        </div>
                        <div className='edit-button-div'>
                            <a href="/">
                                <Button 
                                    sx={{
                                        backgroundColor: '#1976d2',
                                        width: '100%',
                                        color: "#fff",
                                        border: '0.5px solid #1976d2',
                                        '&:hover': {
                                            backgroundColor: '#13599e',
                                            color: "#fff"
                                        },
                                        borderRadius: '20px'
                                    }}
                                    onClick={handleLogOut}
                                >
                                    Logout
                                </Button>
                            </a>
                        </div>
                        <div className='edit-button-div'>
                            <a href="/">
                                <Button 
                                    sx={{
                                        backgroundColor: '#f4f4f5',
                                        width: '100%',
                                        border: '0.5px solid #2a3038',
                                        '&:hover': {
                                            backgroundColor: '#fff',
                                            color: "#1976d2"
                                        },
                                        borderRadius: '20px'
                                    }}
                                >
                                    cancel
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Logout;
