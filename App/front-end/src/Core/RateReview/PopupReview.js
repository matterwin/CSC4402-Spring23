import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import './PopupReview.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 400,
  bgcolor: 'background.paper',
  border: '2px solid #1976d2;',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

export default function PopupReview() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Rate a movie down below:
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, fontFamily: 'Baloo 2' }}>
                Not implemented yet
            </Typography>
            </Box>
        </Modal>
    </div>
  );
}