import * as React from 'react';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
import Divider from '@mui/material/Divider';

import { NavLink } from "react-router-dom";

import './Test.css'

function Test() {

    return (
        <div className='profile-menu'>
            <NavLink end to="/Profile" className={({ isActive }) => (isActive ? 'profileNavActive' : 'profileNavInactive')}>Profile</NavLink>
            <Divider sx={{ my: 0.5, color: '' }} />
            <NavLink end to="/Settings" className={({ isActive }) => (isActive ? 'profileNavActive' : 'profileNavInactive')}>Settings</NavLink> 
            <Divider sx={{ my: 0.5 }} /> 
            <a href="/Login" className='navInactive'>Log In</a>
        </div>
    );
}

export default Test; 