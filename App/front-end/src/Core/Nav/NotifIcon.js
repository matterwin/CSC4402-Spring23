import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Tooltip from '@mui/material/Tooltip';

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
      color: '#1976d2',
    },
  });
  

export default function CustomizedBadges() {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
      <Tooltip title="Notifications">
        <StyledNotificationsNoneIcon />
    </Tooltip>
      </StyledBadge>
    </IconButton>
  );
}