import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Pika from "../Videos/pika.png";
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";

import deleteCookies from '../../Hooks/deleteCookies';
// import readCookies from '../../Hooks/readCookies';

  const StyledKeyboardArrowDownIcon = styled(KeyboardArrowDownIcon)({
    color: '#8f8f8f',
    fontSize: 28,
    '&:hover': {
      color: '#1976d2',
    },
  });

  const StyledKeyboardArrowUpIcon = styled(KeyboardArrowUpIcon)({
    color: '#8f8f8f',
    fontSize: 28,
    '&:hover': {
      color: '#1976d2',
    },
  });

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    border: '1px solid #fff',
    marginTop: theme.spacing(1),
    width: 10,
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[0],
    backgroundColor: '#3b4048',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      color: '#fff',
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
      '&:hover': {
        backgroundColor: '#1976d2',
        color: 'white',
      },
    },
  },
}));



export default function CustomizedMenus(props) {

    const [showArrowDown, setShowArrowDown] = React.useState(true);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    console.log(props);

    function handleLogOut() {
      deleteCookies();
    }

    const handleClick = (event) => {
        setShowArrowDown(!showArrowDown);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setShowArrowDown(false);
    };

    return (
        <div>
            <div
            id="demo-customized-button"
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            variant="contained"
            onClick={handleClick}
            className='parent-div-pfp'
            >   
            <div className="pfp-div">
                <Tooltip title="Profile">
                    <img className="profile-pic" src={Pika} alt="ProfilePicture" />      
                </Tooltip>            
            </div> 
            <div>
                {showArrowDown ? <StyledKeyboardArrowDownIcon/> : <StyledKeyboardArrowUpIcon/> }
            </div>          
        </div>
            <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            disableScrollLock={true}
            sx={{position: 'absolute'}}
            >

          <MenuItem disableRipple>
              <div>{props.username}</div> 
          </MenuItem>

        <Divider sx={{ my: 0.5, backgroundColor: '#fff' }} />

        <NavLink end to="/Profile" className="navlink">
          <MenuItem onClick={handleClose} disableRipple>
          {/* <AccountBox /> */}
          Profile
          </MenuItem>
        </NavLink>

            <NavLink end to="/Settings" className="navlink">
          <MenuItem onClick={handleClose} disableRipple>
            {/* <Whatshot /> */}
            Settings
          </MenuItem>
        </NavLink>

        <Divider sx={{ my: 0.5, backgroundColor: '#fff' }} />

       

        <MenuItem onClick={handleClose} disableRipple >
          <a href="/"><Button variant="contained" sx={{ padding: '5px', paddingRight: '45px', paddingLeft: '45px' }} onClick={handleLogOut} >Log Out</Button></a>
        </MenuItem>
            </StyledMenu>
        </div>
    );
}