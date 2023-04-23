import React from 'react';
import Button from '@mui/material/Button';
import './LogInFooter.css'

function LogInFooter() {

  return (
    <div className='bottom-footer-div'>
        <div className='login-msg'>
            <h1 className='log-in-h1'>Sign in to get full access</h1>
            <div className='div-butts'>
                <a href="/Login">
                    <Button variant="contained" 
                    sx={{ 
                        paddingRight: '30px', 
                        paddingLeft: '30px', 
                        paddingTop: '7px', 
                        paddingBottom: '7px',
                        border: '1px solid #fff',
                        '&:hover': {
                            backgroundColor: '#689acc',
                        }
                    }}
                    >
                        Log In
                    </Button>
                </a>
                <a href="/Login">
                    <Button variant="contained" 
                    sx={{ 
                        paddingRight: '30px', 
                        paddingLeft: '30px', 
                        paddingTop: '7px', 
                        paddingBottom: '7px',
                        color: '#2a3038',
                        backgroundColor: '#f4f4f5',
                        border: '1px solid transparent',
                        '&:hover': {
                            backgroundColor: '#ccc',
                            color: '#2a3038'
                        }
                    }}
                    >
                        Sign up
                    </Button>
                </a>
            </div>
        </div>
    </div>
  );
}

export default LogInFooter;
