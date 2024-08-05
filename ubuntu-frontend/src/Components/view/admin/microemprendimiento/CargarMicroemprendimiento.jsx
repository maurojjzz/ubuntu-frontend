import {
  Box,
  Typography,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
} from "@mui/material";
import { useState, useEffect } from "react";
import { ImageUpload, ReusableButton } from "../../../shared";
import { getCountries } from "../../../../utils/services/dashboard/ServiceCountry";
import { getProvincias } from "../../../../utils/services/dashboard/ServiceProvince";
import { getCategories } from "../../../../utils/services/dashboard/ServiceCategories";

const CargarMicroemprendimiento = () => {
  const [name, setName] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [province, setProvince] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [moreInformation, setMoreInformation] = useState("");
  const [provincias, setProvincias] = useState([]);

  const [country, setCountry] = useState("");
  const [countriess, setCountriess] = useState([]);

  const [category, setCategory] = useState("");
  const [categoriess, setCategoriess] = useState([]);

  const handleCategoriesChange = (event) => {
    const selectedCategories = event.target.value;
    setCategory(selectedCategories);
    // console.log("Categorías seleccionadas:", selectedCategories);
  };

  const handleCountryChange = (event) => {
    const selectedPais = event.target.value;
    setCountry(selectedPais);
    // console.log("País seleccionado:", selectedPais);
    fetchProvincias(selectedPais); 
  };

  const handleProvinciaChange = (event) => {
    const selectedProvincia = event.target.value;
    setProvince(selectedProvincia);
    // console.log("Provincia seleccionada:", selectedProvincia);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleMoreInformationChange = (event) => {
    setMoreInformation(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Formulario enviado");

    const formData = {
      name,
      category,
      subTitle,
      country,
      province,
      ciudad,
      descripcion,
      moreInformation
    };
    console.log("Datos a enviar:", formData);
  };

  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      setCategoriess(data);
      // console.log("categorias", data);  
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCountries = async () => {
    try {
      const data = await getCountries();
      setCountriess(data);
      // console.log("countries", data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProvincias = async (countryId) => {
    try {
      const data = await getProvincias(countryId);
      setProvincias(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCountries();
    fetchCategories();
  }, []);

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
            value={name}
            onChange={(e) => setName(e.target.value)}
            helperText="Se visualizará en el título de la publicación"
          />
        </Box>

        <Box sx={{ mt: "20px", width: "90%" }}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Categorías*</InputLabel>
            <Select
              value={category || ""}
              onChange={handleCategoriesChange}
              label="Categorías*"
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 48 * 4.5 + 8,
                    width: "auto",
                    minWidth: "100%",
                  },
                },
              }}
            >
              {categoriess.map((category) => (
                <MenuItem key={category.name} value={category.name}>
                  {category.description}
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
              value={country || ""}
              onChange={handleCountryChange}
              label="País*"
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 48 * 4.5 + 8,
                    width: "auto",
                    minWidth: "100%",
                  },
                },
              }}
            >
              {countriess.map((country) => (
                <MenuItem key={country.id} value={country.id}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Seleccione el país</FormHelperText>
          </FormControl>
        </Box>

        <Box sx={{ mt: "20px", width: "90%" }}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Provincia/Estado*</InputLabel>
            <Select
              value={province || ""}
              onChange={handleProvinciaChange}
              label="Provincia/Estado*"
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 48 * 4.5 + 8,
                    width: "auto",
                    minWidth: "100%",
                  },
                },
              }}
            >
              {provincias.map((provincia) => (
                <MenuItem key={provincia.id} value={provincia.id}>
                  {provincia.name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Seleccioná una Provincia/Estado de la lista</FormHelperText>
          </FormControl>
        </Box>

        <Box sx={{ mt: "20px", width: "90%" }}>
          <TextField
            fullWidth
            label="Ciudad"
            variant="outlined"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
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
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
            label="Más información del Microemprendedor*"
            variant="outlined"
            value={moreInformation}
            onChange={handleMoreInformationChange}
            helperText={
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <span>Máximo 300 caracteres</span>
                <span>{`${moreInformation.length}/300`}</span>
              </Box>
            }
            inputProps={{ maxLength: 300 }}
            multiline
            rows={4}
          />
        </Box>

        <Box sx={{ mt: "20px", width: "90%", display: "flex", justifyContent: "flex-end" }}>
          <ImageUpload />
        </Box>

        <ReusableButton nombre="Cargar Microemprendimiento" handleClick={handleSubmit} />
      </Box>
    </Box>
  );
};

export default CargarMicroemprendimiento;