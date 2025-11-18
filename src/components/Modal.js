import React from 'react'

import { IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
  color: 'var(--cor-texto)'
};


const ModalNotification = () => {
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
 
   return (
      <div>
      
      
      <IconButton size="large" onClick={handleOpen}>
        <NotificationsIcon fontSize="large" />
      </IconButton>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h5" component="h2">
              <strong>NOTIFICAÇÕES</strong>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
               Nenhuma notificação para visualização
            </Typography>
          </Box>
        </Fade>
      </Modal>

      </div>
   )
}

export default ModalNotification
