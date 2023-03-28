import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react"
import MovieSelection from './MovieSelection';
import Tooltip from '@mui/material/Tooltip';
import NavButtons from './NavButtons';

import './PopupReview.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 700,
  bgcolor: 'background.paper',
  border: '2px solid #1976d2;',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  paddingTop: '-0px'
};

export default function PopupReview() {

  const [open, setOpen] = React.useState(false);
  const [buttonClass, setButtonClass] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function tellUser() {
    const intervalId = setInterval(() => {
        setButtonClass("shakeshakeshake");
      }, 0);
  
      setTimeout(() => {
          clearInterval(intervalId);
          setButtonClass("");
      }, 500);
  }

  //Note to future self: look into materialUI breadcrumbs to go back to prev slide

  return (
    <div>
        <Button 
            onClick={handleOpen}
            sx={{
                backgroundColor: '#A1C7ED',
                color: "#1976d2",
                border: '0.5px solid #2a3038',
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.6)",
                '&:hover': {
                    backgroundColor: '#fff',
                    color: "#1976d2"
                }
            }}
        >
            RATE A MOVIE
        </Button>
        <Modal
            open={open}
            onClose={tellUser}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className='first-container'>
                    <div className='title-popup'>
                        <h6 className='opening-msg'><u>Rate a movie</u></h6>
                    </div>
                    <div className='close-icon'>
                        <Tooltip title="Click to exit">
                            <CloseIcon onClick={handleClose} className={buttonClass} sx={{ color: '#fff', fontSize: 40 }}/>
                        </Tooltip>
                    </div>  
                </div>
                <div>
                    <MovieSelection />
                </div>
                <div className='navbutts'>
                    <NavButtons />
                </div>
            </Box>
        </Modal>
    </div>
  );
}