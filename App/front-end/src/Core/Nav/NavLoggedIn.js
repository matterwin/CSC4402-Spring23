import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import Tooltip from '@mui/material/Tooltip';
// import Notify from './NotifIcon';
import Menu from './Menu';
import ProfileMenu from './ProfileMenu';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Divider from '@mui/material/Divider';

import './NavLoggedIn.css'

function NavLoggedIn() {

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

        <NavLink className="title" end to="/"><h1>local<span className='M-title'>M</span></h1></NavLink>
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

            <NavLink end to="/Rate&Review" className={({ isActive }) => (isActive ? 'navActive' : 'navInactive')}>
                RATE&REVIEW
            </NavLink>
          </div>

          <div className='hide-for-hamburger-menu'>
              <Divider orientation="vertical" style={{ backgroundColor: '#f4f4f5', height: '25px', width:'1px' }} />
          </div>
                    
          {/* <div className='notif'>
              <Notify/>
          </div> */}
          
          <ProfileMenu />
          
        </div>

        <div className='burger'>
          <Menu />
        </div>
       
      </div>
    </div>
  );
}

export default NavLoggedIn;
