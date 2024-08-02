import { useState } from 'react';
import { VscError } from "react-icons/vsc";
import { useTheme } from "@mui/material/styles";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

const BadSend = () => {
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
      <VscError
        style={{
          margin: '0 auto',
          marginTop: '8px',
          color: theme.palette.primary.rojo
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
          textAlign: 'center',
        }}
        id="alert-dialog-title"
      >
        {"Lo sentimos, el Formulario no pudo ser enviado"}
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
          Por favor, volvé a intentarlo
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
      }}>
        <Button 
          sx={{
            color: theme.palette.primary.azul,
            fontFamily: "'Lato'",
            fontSize: '12px',
            fontWeight: '600',
            lineHeight: '20px',
          }}
          onClick={handleClose} 
          autoFocus
        >
          Cancelar
        </Button>
        <Button 
          sx={{
            color: theme.palette.primary.azul,
            fontFamily: "'Lato'",
            fontSize: '12px',
            fontWeight: '600',
            lineHeight: '20px',
            marginRight: '12px',
          }}
          onClick={handleClose} 
          autoFocus
        >
          Intentar Nuevamente
        </Button>
      </DialogActions>
    </Dialog>
  );
};  

export default BadSend;
