import * as React from 'react';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';

import { NavLink } from "react-router-dom";



function Hamburger() {

    return (   
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
      );
}

export default Hamburger;

  