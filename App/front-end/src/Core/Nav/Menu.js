import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomeRounded from '@mui/icons-material/HomeRounded';
import RateReview from '@mui/icons-material/RateReview';
import Divider from '@mui/material/Divider';
import AccountBox from '@mui/icons-material/AccountBox';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import SearchIcon from '@mui/icons-material/Search';

import { NavLink } from "react-router-dom";
import { useState } from 'react';
// import SearchBar from "./SearchBar"

import "./Menu.css"

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
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 20,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function hideMenu() {
      document.removeEventListener("click", hideMenu);
      setIsOpen(false);
  }

  return (
    <div>
        <Button sx={{ padding: '1px' }}>
          <div className="menu-container">
            <div className={`menu-icon ${isOpen ? 'menu-icon--open' : ''}`}  
            onMouseLeave={() => {document.addEventListener("click", hideMenu)}}
            id="demo-customized-button"
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
                <div className="menu-icon__line"></div>
                <div className="menu-icon__line"></div>
                <div className="menu-icon__line"></div>
            </div>                     
          </div>
        </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >        
        <NavLink end to="/" className="navlink">
          <MenuItem onClick={handleClose} disableRipple>
            <HomeRounded />
            Home
          </MenuItem>
        </NavLink>        
        
        <NavLink end to="/" className="navlink">
          <MenuItem onClick={handleClose} disableRipple>
            <RateReview />
            Rate & Review
          </MenuItem>
        </NavLink>  

        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <AccountBox />
          Profile
        </MenuItem>

        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem>

        <MenuItem onClick={handleClose} disableRipple>
          <a href="/Login"><Button variant="contained" sx={{ padding: '5px', paddingRight: '100px', paddingLeft: '100px' }}>Log In</Button></a>
        </MenuItem>

        {/* <MenuItem disableRipple>
          <SearchIcon />
          <SearchBar showIcon={false} sx={{ paddingLeft: '-900px', marginLeft: '-90px' }} fontColor="pink" />
        </MenuItem> */}

        {/* <MenuItem onClick={handleClose} disableRipple>
          <a href="/Login"><Button variant="contained" sx={{ padding: '5px', paddingRight: '90px', paddingLeft: '90px' }}>Sign Out</Button></a>
        </MenuItem> */}

      </StyledMenu>
    </div>
  );
}