import { Box,  IconButton } from "@mui/material";
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ImageEdit = () => {
    const [images, setImages] = useState([null, null, null]);

    const handleEditImage = (index) => {
        
        console.log(`Editar imagen en el índice: ${index}`);
    };

    const handleDeleteImage = (index) => {
        const newImages = [...images];
        newImages[index] = null;
        setImages(newImages);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '20px', width: '90%' }}>
            {images.map((image, index) => (
                <Box key={index} sx={{ position: 'relative', width: '30%', height: '150px', bgcolor: image ? 'transparent' : 'grey.300' }}>
                    {image ? (
                        <img src={image} alt={`imagen-${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                        <Box sx={{ width: '100%', height: '100%' }}></Box>
                    )}
                    <IconButton
                        aria-label="editar"
                        sx={{ position: 'absolute', top: 8, left: 8 }}
                        onClick={() => handleEditImage(index)}
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        aria-label="eliminar"
                        sx={{ position: 'absolute', top: 8, right: 8 }}
                        onClick={() => handleDeleteImage(index)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </Box>
            ))}
        </Box>
    );
};
export default ImageEdit;