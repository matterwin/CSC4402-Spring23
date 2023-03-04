import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { NavLink, useLocation } from "react-router-dom";
import PushPinIcon from '@mui/icons-material/PushPin';

// import SearchBar from "./SearchBar"
import Menu from "./Menu"

import './Navbar.css'

function Navbar() {

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
        {/* <div className="search">
          <SearchBar />
        </div>  */}
        
        <div className="path">
          
          <p className="pos"><PushPinIcon sx={{ fontSize: 20}}/>{pathname}</p>
        </div>

        <div className="test">
          <Menu />
          <a href="/Login" className="login-button"><Button variant="contained" sx={{ padding: '15px' }}>Log In</Button></a>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
