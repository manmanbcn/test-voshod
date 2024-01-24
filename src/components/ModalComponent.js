import React from 'react';
import { useRouter } from 'next/router';
import { Modal, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '7px',
};


const ModalComponent = ({ item }) => {
  const router = useRouter(); 
  return (
  <Modal open={true} onClose={() => window.history.back()}>
    <Box sx={style}>
      <Typography variant="h6" component="h2">
        {item.name}
      </Typography>
      <Typography sx={{ mt: 2 }}>{item.text}</Typography>
      <IconButton 
          aria-label="close" 
          onClick={() => router.back()} 
          style={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
    </Box>
  </Modal>)
};

export default ModalComponent;