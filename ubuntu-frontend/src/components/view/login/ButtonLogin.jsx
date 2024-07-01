import React from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';

function ButtonLogin() {
    const theme = useTheme();

    return (
        <Button
            variant="contained"
            startIcon={<GoogleIcon/>}
            sx={{
                backgroundColor: theme.palette.primary.azul,
                color: 'white',
                fontFamily: theme.typography.fontFamily[0],
                borderRadius: '15px',
                textTransform: 'none',
            }}
        >
            Continua con Google
        </Button>
    );
}

export default ButtonLogin;