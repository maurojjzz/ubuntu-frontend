import { useState } from 'react';
import { PiCheckCircleThin } from "react-icons/pi";
import { useTheme } from "@mui/material/styles";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

const GoodSend = () => {
  const [open, setOpen] = useState(true);

  const theme = useTheme();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          borderRadius: '28px',
          width: '25rem',
          minHeight: '200px', 
        }
      }}
    >
      <PiCheckCircleThin
        style={{
          margin: '0 auto',
          marginTop: '8px',
          color: theme.palette.primary.verdeGestion
        }}
        size={50} 
      />
      <DialogTitle    
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '18px',
          fontFamily: "'Lato' ",
          color: theme.palette.primary.negro,
        }}
        id="alert-dialog-title"
      >
        {"Formulario enviado con éxito"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText 
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            fontSize: '14px',
            fontFamily: "'Lato' ",
            fontWeight: '400',
            lineHeight: '20px',
            color: theme.palette.primary.negro,
          }} 
          id="alert-dialog-description"
        >
          Gracias por contactarnos, nos comunicaremos en breve.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button 
          sx={{
            color: theme.palette.primary.azul,
            fontFamily: "'Lato'",
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '20px',
            marginRight: '12px',
          }}
          onClick={handleClose} 
          autoFocus
        >
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
};  

export default GoodSend;
