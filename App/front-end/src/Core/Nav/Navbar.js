import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";

import SearchBar from "./SearchBar"

import './Navbar.css'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    function hideMenu() {
        document.removeEventListener("click", hideMenu);
        setIsOpen(false);
    }

    let { pathname } = window.location;
    pathname = pathname.substring(1, pathname.length)
    if(pathname === "") pathname = "Home";

  return (
    <div>
      <div className="nav-container">
     
        <NavLink className="title" end to="/"><h1>Navbar</h1></NavLink>
        
        <SearchBar />

        

      <div className="test">
      <p className="pos">{pathname}</p>
        <div className="menu-container">
            <div className={`menu-icon ${isOpen ? 'menu-icon--open' : ''}`} onClick={handleClick} onMouseLeave={() => {
            document.addEventListener("click", hideMenu)}}>
                <div className="menu-icon__line"></div>
                <div className="menu-icon__line"></div>
                <div className="menu-icon__line"></div>
            </div>                     
        </div>

        <a href="/Login" className="login-button"><Button variant="contained" size="large">Log In</Button></a>
       </div>
      </div>
    </div>
  );
}

export default Navbar;
