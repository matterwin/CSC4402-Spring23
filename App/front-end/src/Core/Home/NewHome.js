import React from 'react';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import './NewHome.css'

function Home() {
  return (
    <div>
      <div className="new-contain">
          <div className='new-welcome'>
              <h1 className='new-h1'>Movie Review Site</h1>
              <h3 className='new-h3'>See reviews, movies and more</h3>
              <NavLink end to="/Feed">
                <Button variant="contained" 
                      sx={{ 
                          paddingRight: '80px', 
                          paddingLeft: '80px', 
                          paddingTop: '7px', 
                          paddingBottom: '7px',
                          color: '#2a3038',
                          backgroundColor: '#a5c8eb',
                          border: '1px solid transparent',
                          boxShadow: '0px 20px 100px 20px #cfcfcf',
                          '&:hover': {
                              backgroundColor: '#ccc',
                              color: '#2a3038'
                          }
                      }}
                      >
                        Film Feed 
                </Button>
              </NavLink>
          </div>
          <div className='space'>&nbsp;</div>
      </div>
      <div className="other-new-contain">
        <div className='new-welcome'>
          <h1 className='new-h1'>Other shit</h1>
        </div>
      </div>
      <div className='space'>&nbsp;</div>
      <div className='space'>&nbsp;</div>
      <div className='space'>&nbsp;</div>
    </div>
  );
}

export default Home;
