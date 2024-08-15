import React, { useState } from 'react';
import { Box, Typography, TextField, Button, FormHelperText } from '@mui/material';
import { ReusableButton } from '../../../shared';

const CrearPublicacion = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const maxCharacters = 2000;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Title:', title);
        console.log('Content:', content);
    };

    const handleContentChange = (e) => {
        if (e.target.value.length <= maxCharacters) {
            setContent(e.target.value);
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "3vh",
                paddingTop: "3vh",
                paddingLeft: "3vw",
                paddingRight: "3vw",
            }}
        >
            <Box>
                <Typography
                    sx={{
                        fontFamily: 'Lato',
                        fontSize: '28px',
                        fontWeight: '500',
                        lineHeight: '35px',
                    }}
                >
                    Carga de publicación
                </Typography>
            </Box>
            <Box>
                <Typography
                    sx={{
                        fontFamily: 'Lato',
                        fontSize: '20px',
                        fontWeight: '400',
                        lineHeight: '25px',
                        textAlign: 'center'
                    }}
                >
                    Completa los datos para crear una nueva publicación
                </Typography>
            </Box>

            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    maxWidth: '500px',
                }}
                onSubmit={handleSubmit}
            >
                <TextField
                    label="Título"
                    variant="outlined"
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <FormHelperText sx={{marginLeft: '2vw'}}>
                    Se visualizará en el título de la publicación
                </FormHelperText>

                <TextField
                    label="Ingresá el contenido de la publicación"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={15}
                    value={content}
                    onChange={handleContentChange}
                    required
                    sx={{marginTop: '2vh'}}
                />
                <FormHelperText sx={{ display: 'flex', justifyContent: 'space-between', marginLeft: '2vw', marginRight: '2vw'}}>
                    <span>Máximo 2000 caracteres</span>
                    <span>{`${content.length}/${maxCharacters}`}</span>
                </FormHelperText>

                <ReusableButton nombre="Crear publicación" handleClick={handleSubmit} />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Crear Publicación
                </Button>
            </Box>
        </Box>
    );
};

export default CrearPublicacion;