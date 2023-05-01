import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import DefaultPic from "../Videos/defaultPic.png";

import './SmallScreenNavIn.css'
import readCookies from '../../Hooks/readCookies';

export default function TemporaryDrawer() {

    const userId = readCookies();
    const [username, setUsername] = useState('');
    const [userProfilePic, setUserProfilePic] = useState("");

    const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }

    setState({ ...state, [anchor]: open });
    };

    useEffect(() => {

      const url = `http://localhost:8000/api/userAuthControllerInfo?id=${userId}`;

      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (response.status === 404) {
          throw new Error("User not found");
        }
        return response.json();     
      })
      .then(data => {
        if(data) { 
          setUsername(data.username);
          if(data.url == null)
            setUserProfilePic(DefaultPic);
        }
      })
      .catch(error => {       
        console.error(error);
      });

    },[userId])

    const list = (anchor) => (
    <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, margin: '10px' }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
        {!userId && 
        <div className='burger-navs'>
            <NavLink end to="/" className={({ isActive }) => (isActive ? 'navActive-burger' : 'navInactive-burger')}>
                HOME
            </NavLink> 
            <NavLink end to="/Feed" className={({ isActive }) => (isActive ? 'navActive-burger' : 'navInactive-burger')}>
                FEED
            </NavLink>
            <a href="/Login">
                <Button 
                    variant="contained" 
                    sx={{ 
                        paddingRight: '30px', 
                        paddingLeft: '30px', 
                        paddingTop: '7px', 
                        paddingBottom: '7px',
                        width:"100%" 
                    }}
                >
                    Log In
                </Button>
            </a>
            </div>
        }
        {userId && 
        <div className='burger-navs'>
            <div className='burger-pfp'>
                <div className="pfp-div">
                    <img className="profile-pic" src={userProfilePic} alt="ProfilePicture" />                  
                </div>
                <div className="usrname-burger">@{username}</div>  
            </div>

            <NavLink end to="/" className={({ isActive }) => (isActive ? 'navActive-burger' : 'navInactive-burger')}>
                HOME
            </NavLink> 
            <NavLink end to="/Feed" className={({ isActive }) => (isActive ? 'navActive-burger' : 'navInactive-burger')}>
                FEED
            </NavLink>
            <NavLink end to="/RATE&REVIEW" className={({ isActive }) => (isActive ? 'navActive-burger' : 'navInactive-burger')}>
                RATE&REVIEW
            </NavLink>
            <NavLink end to="/Profile" className={({ isActive }) => (isActive ? 'navActive-burger' : 'navInactive-burger')}>
                Profile
            </NavLink>
            <NavLink end to="/Settings" className={({ isActive }) => (isActive ? 'navActive-burger' : 'navInactive-burger')}>
                Settings
            </NavLink>
            <a href="/Logout">
                <Button 
                    variant="contained" 
                    sx={{ 
                        paddingRight: '30px', 
                        paddingLeft: '30px', 
                        paddingTop: '7px', 
                        paddingBottom: '7px',
                        width:"100%" 
                    }}
                >
                    Log Out
                </Button>
            </a>
            </div>
        }

        </List>
    </Box>
    );

    return (
    <div>
        <Button onClick={toggleDrawer('right', true)}>
            <MenuIcon 
            sx={{
                
                fontSize: 50,
                color:'#fff',
                padding: '5px',
                margin: 0,
                marginTop: '-2px',
                '&:hover': {
                    backgroundColor: '#f4f4f542'
                },
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                borderRadius:'50%'
                }}
            />
        </Button>
        <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            disableScrollLock={true}
            sx={{position: 'absolute'}}
        >
            {list('right')}
        </Drawer>
    </div>
    );
}
