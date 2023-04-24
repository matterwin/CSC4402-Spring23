import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';
import updateDelDisplay from './ReviewHooks/updateDelDisplay';
import getDelDisplay from './ReviewHooks/getDelDisplay';
import deleteReview from './ReviewHooks/deleteReview';

export default function DeleteAlert(props) {
  const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(getDelDisplay());
        
    },[getDelDisplay()])

    // console.log("open:     " + open)

  const handleClose = () => {
    updateDelDisplay(false);
    setOpen(false);
  };

  const handleDelete = () => {
    handleClose();
    deleteReview(props.deleteMovieId);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          maxWidth: '300px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <DialogTitle id="alert-dialog-title" sx={{ fontSize: '1.1rem' }}>
          {"Fair warning"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{ fontSize: '1rem' }}>
            Are you sure you want to delete your review?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: '#e4e6e7', }}>
          <Button 
            onClick={handleClose} 
            sx={{
              '&:hover': {
                  backgroundColor: '#cccccc;',
                  color: "#1976d2"
              },
              borderRadius: '20px'
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleDelete} 
            sx={{
              backgroundColor: '#1976d2',
              color: "#fff",
              border: '0.5px solid #1976d2',
              '&:hover': {
                  backgroundColor: '#f74242',
                  color: "#fff",
                  border: '0.5px solid #f74242',
              },
              borderRadius: '20px',
          }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}