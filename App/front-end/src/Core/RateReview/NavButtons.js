import * as React from 'react';
import Button from '@mui/material/Button';
import './NavButtons.css'


export default function NavButtons() {

  return (
    <div>
      <div className='nav-buttons-div'>
        <div>
          <Button 
            sx={{
              backgroundColor: '#1976d2',
                color: '#fff',
                border: '0.5px solid #2a3038',
                '&:hover': {
                  backgroundColor: '#114d8a',
                }
            }}
          >
            back
          </Button>
        </div>
        <div>
          <Button 
            sx={{
                backgroundColor: '#1976d2',
                color: '#fff',
                border: '0.5px solid #2a3038',
                '&:hover': {
                  backgroundColor: '#114d8a',
                }
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}