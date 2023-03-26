import * as React from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Tooltip from '@mui/material/Tooltip';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: '#1976d2' 
  },
}));

const StyledNotificationsNoneIcon = styled(NotificationsNoneIcon)({
    color: '#8f8f8f',
    fontSize: 28,
    '&:hover': {
      color: '#f4f4f5',
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
  
  export default function CustomizedBadges() {
  
      const [showArrowDown, setShowArrowDown] = React.useState(true);
  
      const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
  
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
              <div>
              <IconButton 
              aria-label="cart" 
              sx={{ '&:hover': { backgroundColor: '#f4f4f52a' } }}
              >
                <StyledBadge badgeContent={4} color="secondary" >
                  <Tooltip title="Notifications" >
                    <StyledNotificationsNoneIcon />
                  </Tooltip>
                </StyledBadge>
              </IconButton>           
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
  
          <NavLink end to="/" className="navlink">
            <MenuItem onClick={handleClose} disableRipple>
              New comment
            </MenuItem>
          </NavLink>
  
  
              </StyledMenu>
          </div>
      );
  }