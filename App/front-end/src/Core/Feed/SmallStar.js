import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

export default function SingleStar() {
  const value = 1;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        emptyIcon={null}
        max={value}
        icon={<StarIcon style={{ color: "#1976d2", fontSize: '25px' }} fontSize="inherit" />}
      />
    </Box>
  );
}
