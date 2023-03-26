import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import Tooltip from '@mui/material/Tooltip';
import Notify from './NotifIcon';
import Menu from './Menu';
import P from './P';
import WidgetsIcon from '@mui/icons-material/Widgets';

// import readCookies from '../../Hooks/readCookies';

import './Navbar.css'

function Navbar() {

  const location = useLocation();
  const [pathname, setPathname] = useState("");
  // const [userData, setUserData] = useState([]);

  // const userId = readCookies();

  // useEffect(() => {

  //   const url = `http://localhost:8000/api/userAuthControllerInfo?id=${userId}`;

  //   fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //   .then(response => {
  //     if (response.status === 404) {
  //       throw new Error("User not found");
  //     }
  //     return response.json();     
  //   })
  //   .then(data => {
  //     if(data) { 
  //       console.log(data);   
  //       console.log(data.id);
  //       setUserData(data);
  //     }
  //   })
  //   .catch(error => {       
  //     console.log("Error: " + error.message);
  //   });

  // },[userId])

  // console.log("testing username from userData " + userData.username)

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

            <NavLink end to="/Rate&Review" className={({ isActive }) => (isActive ? 'navActive' : 'navInactive')}>
                RATE&REVIEW
            </NavLink>
          </div>
                    
          <div className='notif'>
              <Notify/>
          </div>
          
          {/* <P userData={JSON.stringify(userData)}/> */}
          <P />
          
        </div>

        <div className='burger'>
          <Menu />
        </div>
       
      </div>
    </div>
  );
}

export default Navbar;
