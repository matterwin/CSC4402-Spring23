import React from 'react';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";

import SearchBar from "./SearchBar"
import Menu from "./Menu"

import './Navbar.css'

function Navbar() {

  let { pathname } = window.location;
  pathname = pathname.substring(1, pathname.length)
  if(pathname === "") pathname = "Home";

  return (
    <div>
      <div className="nav-container">
     
        <NavLink className="title" end to="/"><h1>Navbar</h1></NavLink>
        <div className="search">
          <SearchBar />
        </div> 
        

        <div className="test">
          <p className="pos">{pathname}</p>
          <Menu />
          <a href="/Login" className="login-button"><Button variant="contained" sx={{ padding: '15px' }}>Log In</Button></a>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
