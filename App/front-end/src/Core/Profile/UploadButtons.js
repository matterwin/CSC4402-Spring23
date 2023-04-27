import * as React from 'react';
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

export default function UploadButtons() {
  return (
      <Button component="label"
        sx={{
          marginLeft: '150px',
          borderRadius:'10%',
          border: '1px solid #8f8f8f',
          width: '20px',
          backgroundColor:'#f4f4f5', 
          color:"black",
          '&:hover': {
            backgroundColor: '#f4f4f5',
          }
        }}
      >
      <PhotoCamera />
        <input hidden accept="image/*" multiple type="file" />
      </Button>
  );
}