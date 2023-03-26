import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import Tooltip from '@mui/material/Tooltip';
import Menu from './Menu';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Button from '@mui/material/Button';

import './Navbar.css'

function OtherNav() {

  const location = useLocation();
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    let currentPathname = location.pathname.substring(1);
    if(currentPathname === "") currentPathname = "Home";
    setPathname(currentPathname);
  }, [location]);

  return (
    <div className="fixed-nav">
      <div className="nav-container">

        <NavLink className="title" end to="/"><h1>Navbar</h1></NavLink>
        <div className='search-bar'>
          <SearchBar sx={{paddingRight: 200, color: 'white'}}/>
        </div>
            
        <div className="path">             
          <div className="pos">
            <WidgetsIcon sx={{ fontSize: 27, marginTop:'3px'}}/>
            <Tooltip title="Where you are">
              <p className='pos-p'>{pathname}</p>
            </Tooltip>
            </div>   
        </div>     

        <div className="test">

            <div className='nav-links'>
                <NavLink end to="/" className={({ isActive }) => (isActive ? 'navActive' : 'navInactive')}>
                    HOME
                </NavLink> 

                <NavLink end to="/Feed" className={({ isActive }) => (isActive ? 'navActive' : 'navInactive')}>
                    FEED
                </NavLink>  
 
                <a href="/Login" className='navInactive'>RATE&REVIEW</a>
            </div>
                      
            <a href="/Login"><Button variant="contained" sx={{ paddingRight: '30px', paddingLeft: '30px' }}>Log In</Button></a>
          
        </div>

        <div className='burger'>
          <Menu />
        </div>
       
      </div>
    </div>
  );
}

export default OtherNav;
