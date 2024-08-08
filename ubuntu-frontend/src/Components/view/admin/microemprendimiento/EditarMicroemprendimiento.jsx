import { Box, Typography, TextField, MenuItem, FormControl, InputLabel, Select, FormHelperText } from "@mui/material";
import { useState, useEffect } from "react";
import { ReusableButton, ImageEdit } from '../../../shared';
import { putMicrobusiness } from "../../../../utils/services/dashboard/ServiceMicroBusiness";
import { ServiceHttp } from "../../../../utils/services/serviceHttp";
import { getCategories } from "../../../../utils/services/dashboard/ServiceCategories";

const EditarMicroemprendimiento = ({ microBusinessId }) => {
    const [name, setName] = useState('');
    const [categoria, setCategoria] = useState('');
    const [pais, setPais] = useState('');
    const [provincia, setProvincia] = useState('');
    const [description, setDescription] = useState('');
    const [moreInformation, setMoreInformation] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const microemprendimientos = new ServiceHttp("/microbusiness");
    const [categories, setCategories] = useState([]);

    const getMicroEmprendimiento = async (microBusinessId) => {
        try {
            const data = await microemprendimientos.getById(microBusinessId);
            if (data.error) throw data.error;

            console.log("Data del microemprendimiento correspondiente al id que llega de card:", data);

            // Actualizar el estado con la información recibida
            setName(data.name);
            setCategoria(data.categoryDescription);
            setPais(data.provinceCountryName);
            setProvincia(data.provinceName);
            setDescription(data.description);
            setMoreInformation(data.moreInformation);
            setSubTitle(data.subTitle);

        } catch (error) {
            console.error(error);
        }
    };


    const fetchCategories = async () => {
        try {
            const data = await getCategories(); // Usar la función importada
            console.log("Categorías obtenidas:", data);
            setCategories(data); // Establecer las categorías en el estado
        } catch (error) {
            console.error("Error al obtener categorías:", error);
        }
    };


    useEffect(() => {
        console.log("id del micro que llega de card", microBusinessId);
        getMicroEmprendimiento(microBusinessId);
        fetchCategories();
    }, [microBusinessId]);

    const handleCategoriaChange = (event) => {
        setCategoria(event.target.value);
    };

    const handlePaisChange = (event) => {
        setPais(event.target.value);
    };

    const handleProvinciaChange = (event) => {
        setProvincia(event.target.value);
    };

    const handleDescripcionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleMasInformacionChange = (event) => {
        setMoreInformation(event.target.value);
    };

    const handleSubmit = async () => {
        // Construir el objeto con los datos del formulario
        const updatedMicroBusiness = {
            name,
            description,
            moreInformation,
            subTitle,
            category: categoria,
            // provinceCountryName: pais,
            // provinceName: provincia,
        };
        const token = sessionStorage.getItem('token');
        
        console.log("ID del microemprendimiento:", microBusinessId);
    console.log("Datos del microemprendimiento a actualizar:", updatedMicroBusiness);
    console.log("Token de autenticación:", token);
        
        try {
            // Llamar al servicio para actualizar el microemprendimiento
            const data = await putMicrobusiness(microBusinessId, updatedMicroBusiness, token);
            console.log("Microemprendimiento actualizado:", data);
        } catch (error) {
            console.error("Error al actualizar el microemprendimiento:", error);
        }
    };

    return (
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
                    Edición de Microemprendimiento
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
                    Editá el formulario de carga del Microemprendimiento
                </Typography>

                <Box sx={{ mt: "20px", width: "90%" }}>
                    <TextField
                        fullWidth
                        label="Nombre del Microemprendimiento"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        {categories.map((cat) => (
                            <MenuItem key={cat.name} value={cat.name} sx={{ whiteSpace: 'normal' }}>
                                {cat.description}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>Seleccione una categoría adecuada</FormHelperText>
                </FormControl>
            </Box>





                <Box sx={{ mt: "20px", width: "90%" }}>
                    <TextField
                        fullWidth
                        label="Subcategoría"
                        variant="outlined"
                        value={subTitle}
                        onChange={(e) => setSubTitle(e.target.value)}
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
                            <MenuItem value="Argentina">Argentina</MenuItem>
                            <MenuItem value="Brasil">Brasil</MenuItem>
                            <MenuItem value="Chile">Chile</MenuItem>
                            <MenuItem value="Uruguay">Uruguay</MenuItem>
                            <MenuItem value="Colombia">Colombia</MenuItem>
                        </Select>
                        <FormHelperText>Seleccione el país</FormHelperText>
                    </FormControl>
                </Box>

                <Box sx={{ mt: "20px", width: "90%" }}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Provincia/Estado*</InputLabel>
                        <Select
                            value={provincia}
                            onChange={handleProvinciaChange}
                            label="Provincia/Estado*"
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
                            <MenuItem value="Amazonas">Amazonas</MenuItem>
                            <MenuItem value="Buenos Aires">Buenos Aires</MenuItem>
                            <MenuItem value="Córdoba">Córdoba</MenuItem>
                            <MenuItem value="Mendoza">Mendoza</MenuItem>
                            <MenuItem value="San Luis">San Luis</MenuItem>
                        </Select>
                        <FormHelperText>Seleccioná una Provincia/Estado de la lista</FormHelperText>
                    </FormControl>
                </Box>

                <Box sx={{ mt: "20px", width: "90%" }}>
                    <TextField
                        fullWidth
                        label="Ciudad"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        helperText="Sin abreviaturas, nombre completo"
                    />
                </Box>

                <Box sx={{ mt: "20px", width: "90%" }}>
                    <TextField
                        fullWidth
                        label="Descripción del Microemprendimiento*"
                        variant="outlined"
                        value={description}
                        onChange={handleDescripcionChange}
                        helperText={
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Máximo 300 caracteres</span>
                                <span>{`${description.length}/300`}</span>
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
                        label="Más información del Microemprendedor*"
                        variant="outlined"
                        value={moreInformation}
                        onChange={handleMasInformacionChange}
                        helperText={
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Máximo 300 caracteres</span>
                                <span>{`${moreInformation.length}/300`}</span>
                            </Box>
                        }
                        inputProps={{ maxLength: 300 }}
                        multiline
                        rows={4}
                    />
                </Box>

                <ImageEdit />

                <ReusableButton nombre="Guardar cambios" handleClick={handleSubmit} />
            </Box>
        </Box>
    );
};

export default EditarMicroemprendimiento;
