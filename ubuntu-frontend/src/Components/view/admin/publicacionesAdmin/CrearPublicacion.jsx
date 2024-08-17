import React, { useState } from 'react';
import { Box, Typography, TextField, FormHelperText, Button } from '@mui/material';
import { ReusableButton } from '../../../shared';
import axios from 'axios';
import UploadIcon from '@mui/icons-material/Upload';
import theme from '../../../../theme/theme';

const CrearPublicacion = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageFiles, setImageFiles] = useState([]);
    const [imageBase64, setImageBase64] = useState([]);
    const maxCharacters = 2000;

    // Convert images to base64 and send to backend
    const handleImageUpload = async (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            const base64Images = [];
            const imageNames = [];

            // Use a loop to read all files
            for (const file of files) {
                if (file.size > 3 * 1024 * 1024) {
                    alert('Each image must be less than 3MB.');
                    return;
                }

                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = async () => {
                    const base64 = reader.result.split(',')[1];
                    base64Images.push(base64);
                    imageNames.push(file.name);

                    console.log('Image name:', file.name); // Debug line

                    // Send base64 image to the backend
                    try {
                        const response = await axios.post('http://localhost:8080/api/v1/images/uploadBase64', {
                            fileBase64: base64,
                            microBusinessId: 6 // Replace with appropriate ID or parameter
                        });
                        console.log('Image uploaded:', response.data);
                    } catch (error) {
                        console.error('Error uploading image:', error);
                    }

                    // Update state after processing all files
                    if (base64Images.length === files.length) {
                        setImageBase64(base64Images);
                        setImageFiles(imageNames);
                    }
                };
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (title && content) {
            try {
                const payload = {
                    user: { id: 6 },
                    title: title,
                    description: content,
                    // images: imageBase64.map(base64 => ({
                    //     url: `https://res.cloudinary.com/dnkaxvkr9/image/upload/v1719576387/${base64}`
                    // }))
                };

                const url = 'http://localhost:8080/api/v1/publications/createPublication';
                await axios.post(url, payload);
            } catch (error) {
                console.error('Error creating publication:', error);
            }
        } else {
            console.log('Please fill in all required fields.');
        }
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
                <FormHelperText sx={{ marginLeft: '2vw' }}>
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
                    sx={{ marginTop: '2vh' }}
                />
                <FormHelperText sx={{ display: 'flex', justifyContent: 'space-between', marginLeft: '2vw', marginRight: '2vw' }}>
                    <span>Máximo 2000 caracteres</span>
                    <span>{`${content.length}/${maxCharacters}`}</span>
                </FormHelperText>

                <Box sx={{ mt: "20px", width: "90%", display: "flex", justifyContent: "flex-end" }}>
                    <Box>
                        <Button
                            variant="contained"
                            startIcon={<UploadIcon />}
                            component="label"
                            sx={{
                                backgroundColor: "#093C59",
                                width: "95%",
                                maxWidth: "152px",
                                minWidth: "152px",
                                height: "40px",
                                borderRadius: "100px",
                                mb: "15px",
                                zIndex: 1,
                                "&:hover": {
                                    backgroundColor: theme.palette.primary.azul,
                                },
                                textTransform: "none",
                                color: "white",
                                fontFamily: "Lato",
                                fontWeight: "700",
                                fontSize: "14px",
                            }}
                        >
                            Subir Imágen
                            <input
                                type="file"
                                hidden
                                accept="image/*"
                                multiple
                                onChange={handleImageUpload}
                            />
                        </Button>

                        <Typography sx={{ fontSize: '14px', maxWidth: "152px", minWidth: "152px" }}>
                            *Requerida al menos una imagen<br />
                            Hasta 3 imágenes. Máximo 3Mb cada una
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
                            {imageFiles.length > 0 ? (
                                imageFiles.map((name, index) => (
                                    <Typography key={index} sx={{ fontSize: '14px', wordBreak: 'break-all', color: "red" }} >
                                        Archivo: {name}
                                    </Typography>
                                ))
                            ) : (
                                <Typography sx={{ fontSize: '14px', color: "gray" }}>
                                    Seleccione una Imagen
                                </Typography>
                            )}
                        </Box>
                    </Box>
                </Box>

                <ReusableButton nombre="Crear publicación" type="submit" />
            </Box>
        </Box>
    );
};

export default CrearPublicacion;
