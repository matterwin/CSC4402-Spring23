import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import WidgetsIcon from '@mui/icons-material/Widgets';
// import SearchBar from "./SearchBar"
import Pika from "../Videos/pika.png"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
// import Hamburger from './Hamburger'
import Notify from './NotifIcon'
import Test from './Test'
import Menu from './Menu'

import './Navbar.css'

const StyledExpandMoreIcon = styled(ExpandMoreIcon)({
  color: '#8f8f8f',
  fontSize: 28,
  '&:hover': {
    color: '#1976d2',
  },
});


function Navbar() {

  const location = useLocation();
  const [pathname, setPathname] = useState("");
  const [showPMenu, setShowPMenu] = useState(false);

  const showProfileMenu = (event) => {
    setShowPMenu(!showPMenu);
    console.log("test");
  };

  // const hideProfileMenu = () => {
  //   setShowPMenu(false);
  //   console.log("test");
  // };

  useEffect(() => {
    let currentPathname = location.pathname.substring(1);
    if(currentPathname === "") currentPathname = "Home";
    setPathname(currentPathname);
  }, [location]);

  return (
    <div className="fixed-nav">
      <div className="nav-container">

        <NavLink className="title" end to="/"><h1>Navbar</h1></NavLink>
        {/* <SearchBar/> */}
            
        <div className="path">         
          <div className="pos">
            <WidgetsIcon sx={{ fontSize: 27, marginTop:'3px'}}/>
            <p className='pos-p'>{pathname}</p>
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

            <NavLink end to="/RateReview" className={({ isActive }) => (isActive ? 'navActive' : 'navInactive')}>
                RATE&REVIEW
            </NavLink>
          </div>
                    
          <div className='notif'>
              <Notify/>
          </div>
          
          
          <div className='parent-div-pfp' onClick={showProfileMenu} >
          {showPMenu ? <Test /> : <></> }
            <Tooltip title="Profile">
              <div className="pfp-div">
                <img className="profile-pic" src={Pika} alt="ProfilePicture" />
              </div>
              
            </Tooltip>
            
            <div>
                <StyledExpandMoreIcon />
            </div>
          </div>
          
        </div>

        <div className='burger'>
          <Menu />
        </div>

        
          
        
      </div>
    </div>
  );
}

export default Navbar;
