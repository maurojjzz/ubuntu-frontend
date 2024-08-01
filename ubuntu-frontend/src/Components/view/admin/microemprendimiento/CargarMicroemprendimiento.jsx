import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Typography, TextField, MenuItem, FormControl, InputLabel, Select, FormHelperText } from "@mui/material";
import { useState } from "react";
import { ImageUpload } from '../../../shared';
import { ReusableButton } from '../../../shared';
const theme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& label.Mui-focused': {
                        color: 'blue', // Cambia el color según tu preferencia
                    },
                    '& .MuiInput-underline:after': {
                        borderBottomColor: 'blue', // Cambia el color según tu preferencia
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'gray', // Cambia el color según tu preferencia
                        },
                        '&:hover fieldset': {
                            borderColor: 'gray', // Cambia el color según tu preferencia
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'blue', // Cambia el color según tu preferencia
                        },
                    },
                },
            },
        },
    },
});

const CargarMicroemprendimiento = () => {
    const [nombre, setNombre] = useState('');
    const [categoria, setCategoria] = useState('');
    const [pais, setPais] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleCategoriaChange = (event) => {
        setCategoria(event.target.value);
    };

    const handlePaisChange = (event) => {
        setPais(event.target.value);
    };

    const handleDescripcionChange = (event) => {
        setDescripcion(event.target.value);
    };

    const handleSubmit = () => {
        // Lógica para manejar la carga del microemprendimiento
        console.log("Formulario enviado");
    };

    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: "Lato",
                            fontWeight: "500",
                            fontSize: "28px",
                            lineHeight: "35px",
                            mt: "40px",
                            mb: "24px",
                        }}
                        align="center"
                    >
                        Carga de Microemprendimientos
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: "'Lato'",
                            fontWeight: "400",
                            fontSize: "20px",
                            lineHeight: "25px",
                            textAlign: "center",
                            marginTop: "2vh",
                            marginLeft: "7vh",
                            marginRight: "7vh",
                            color: "black",
                        }}
                    >
                        Completá el formulario para cargar un Microemprendimiento
                    </Typography>

                    <Box sx={{ mt: "20px", width: "90%" }}>
                        <TextField
                            fullWidth
                            label="Nombre del Microemprendimiento"
                            variant="outlined"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            helperText="Se visualizará en el título de la publicación"
                        />
                    </Box>

                    <Box sx={{ mt: "20px", width: "90%" }}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel>Categorías*</InputLabel>
                            <Select
                                value={categoria}
                                onChange={handleCategoriaChange}
                                label="Categorías*"
                                MenuProps={{
                                    PaperProps: {
                                        style: {
                                            maxHeight: 48 * 4.5 + 8,
                                            width: 'auto',
                                            minWidth: '100%',
                                        },
                                    },
                                }}
                            >
                                <MenuItem value="categoria1" sx={{ whiteSpace: 'normal' }}>Economía social / Desarrollo local / Inclusión financiera</MenuItem>
                                <MenuItem value="categoria2" sx={{ whiteSpace: 'normal' }}>Agroecología / Orgánicos / Alimentación saludable</MenuItem>
                                <MenuItem value="categoria3" sx={{ whiteSpace: 'normal' }}>Conservación/ Regeneración / Servicios ecosistémicos</MenuItem>
                                <MenuItem value="categoria4" sx={{ whiteSpace: 'normal' }}>Empresas / Organismos de impacto / Economía circular</MenuItem>
                            </Select>
                            <FormHelperText>Seleccione una categoría adecuada</FormHelperText>
                        </FormControl>
                    </Box>

                    <Box sx={{ mt: "20px", width: "90%" }}>
                        <TextField
                            fullWidth
                            label="Subcategoría"
                            variant="outlined"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            helperText="Escribi la subcategoría del Microemprendimiento"
                        />
                    </Box>

                    <Box sx={{ mt: "20px", width: "90%" }}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel>País*</InputLabel>
                            <Select
                                value={pais}
                                onChange={handlePaisChange}
                                label="País*"
                                MenuProps={{
                                    PaperProps: {
                                        style: {
                                            maxHeight: 48 * 4.5 + 8,
                                            width: 'auto',
                                            minWidth: '100%',
                                        },
                                    },
                                }}
                            >
                                <MenuItem value="argentina">Argentina</MenuItem>
                                <MenuItem value="brasil">Brasil</MenuItem>
                                <MenuItem value="chile">Chile</MenuItem>
                                <MenuItem value="uruguay">Uruguay</MenuItem>
                            </Select>
                            <FormHelperText>Seleccione el país</FormHelperText>
                        </FormControl>
                    </Box>

                    <Box sx={{ mt: "20px", width: "90%" }}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel>Provincia/Estado*</InputLabel>
                            <Select
                                value={pais}
                                onChange={handlePaisChange}
                                label="País*"
                                MenuProps={{
                                    PaperProps: {
                                        style: {
                                            maxHeight: 48 * 4.5 + 8,
                                            width: 'auto',
                                            minWidth: '100%',
                                        },
                                    },
                                }}
                            >
                                <MenuItem value="argentina">Buenos Aires</MenuItem>
                                <MenuItem value="brasil">Córdoba</MenuItem>
                                <MenuItem value="chile">Mendoza</MenuItem>
                                <MenuItem value="uruguay">San Luis</MenuItem>
                            </Select>
                            <FormHelperText>Seleccioná una Provincia/Estado de la lista</FormHelperText>
                        </FormControl>
                    </Box>

                    <Box sx={{ mt: "20px", width: "90%" }}>
                        <TextField
                            fullWidth
                            label="Ciudad"
                            variant="outlined"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            helperText="Sin abreviaturas, nombre completo"
                        />
                    </Box>

                    <Box sx={{ mt: "20px", width: "90%" }}>
                        <TextField
                            fullWidth
                            label="Descripción del Microemprendimiento*"
                            variant="outlined"
                            value={descripcion}
                            onChange={handleDescripcionChange}
                            helperText={
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Máximo 300 caracteres</span>
                                    <span>{`${descripcion.length}/300`}</span>
                                </Box>
                            }
                            inputProps={{ maxLength: 300 }}
                            multiline
                            rows={4}
                        />
                    </Box>

                    <Box sx={{ mt: "20px", width: "90%" }}>
                        <TextField
                            fullWidth
                            label="Mas información del Microemprendedor*"
                            variant="outlined"
                            value={descripcion}
                            onChange={handleDescripcionChange}
                            helperText={
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Máximo 300 caracteres</span>
                                    <span>{`${descripcion.length}/300`}</span>
                                </Box>
                            }
                            inputProps={{ maxLength: 300 }}
                            multiline
                            rows={4}
                        />
                    </Box>

                    <Box sx={{ mt: "20px", width: "90%", display: 'flex', justifyContent: 'flex-end' }}>
                        <ImageUpload />
                    </Box>

                    <ReusableButton nombre="Cargar Microemprendimiento" handleClick={handleSubmit} />


                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default CargarMicroemprendimiento;