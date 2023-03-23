import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

import { NavLink } from "react-router-dom";
import { useState } from 'react';

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
    border: '1px solid #fff',
    marginTop: theme.spacing(1),
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
      '&:hover': {
        backgroundColor: '#1976d2',
        color: 'white',
        },
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
    document.addEventListener("keydown", handleClose);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
    document.removeEventListener("keydown", console.log("event listener removed"));
  };

  return (
    <div>
        <Button sx={{ padding: '1px' }}>
          <div className="menu-container">
            <div className={`menu-icon ${isOpen ? 'menu-icon--open' : ''}`}  
            id="demo-customized-button"
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            variant="contained"
            onClick={handleClick}
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
        disableScrollLock={true}
        sx={{position: 'absolute'}}
      >        

        <MenuItem disableRipple>
            <div>noahlewis</div> 
        </MenuItem>

        <Divider sx={{ my: 0.5, backgroundColor: '#fff' }} />

        <NavLink end to="/" className="navlink">
          <MenuItem onClick={handleClose} disableRipple>
            Home
          </MenuItem>
        </NavLink>        

        <NavLink end to="/Feed" className="navlink">
          <MenuItem onClick={handleClose} disableRipple>
            Feed
          </MenuItem>
        </NavLink>  

        <NavLink end to="/Rate&Review" className="navlink">
          <MenuItem onClick={handleClose} disableRipple>
            Rate & Review
          </MenuItem>
        </NavLink>

        <Divider sx={{ my: 0.5, backgroundColor: '#fff' }} />

        <NavLink end to="/Profile" className="navlink">
          <MenuItem onClick={handleClose} disableRipple>
          Profile
          </MenuItem>
        </NavLink>

        <MenuItem onClick={handleClose} disableRipple>
          <a href="/Login"><Button variant="contained" sx={{ padding: '5px', paddingRight: '100px', paddingLeft: '100px' }}>Log In</Button></a>
        </MenuItem>

        {/* {
          renderIn ? <></> : 
          <Stack sx={{width: '245px', paddingLeft: '15px', paddingRight: '15px', paddingBottom: '10px'}} spacing={2}>
            <Alert severity="info">
              <AlertTitle>Really?</AlertTitle>
              What more do you need — <strong>search around</strong>
            </Alert>
          </Stack>
        }
         */}


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