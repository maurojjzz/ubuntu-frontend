import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import UploadIcon from '@mui/icons-material/Upload'; // Asegúrate de tener instalado @mui/icons-material
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const ImageUpload = () => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState("");
    const theme = useTheme();
    const navigate = useNavigate();

    const handleImageUpload = (event) => {
        const files = event.target.files;
        const fileArray = Array.from(files);

        if (fileArray.length > 3) {
            setError("Puedes subir hasta 3 imágenes.");
            return;
        }

        for (let file of fileArray) {
            if (file.size > 3 * 1024 * 1024) {
                setError("Cada imagen debe ser menor a 3MB.");
                return;
            }
        }

        setImages(fileArray);
        setError("");
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
            <Button
                variant="contained"
                // component="label"
                startIcon={<UploadIcon />}
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
            {error && (
                <Typography sx={{ mt: 1, textAlign: 'center', fontSize: '12px', color: 'red' }}>
                    {error}
                </Typography>
            )}
            <Typography sx={{  fontSize: '14px', maxWidth: "152px",
                    minWidth: "152px", }}>
                *Requerida al menos una imagen<br />
                Hasta 3 imágenes. Máximo 3Mb cada una
            </Typography>
            
        </Box>
        
    );
};

export default ImageUpload;