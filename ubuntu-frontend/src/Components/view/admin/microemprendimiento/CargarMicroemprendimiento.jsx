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
import { ServiceHttp } from "../../../../utils/services/serviceHttp";

const CargarMicroemprendimiento = () => {
  const [name, setName] = useState("");
  
  const [category, setCategory] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [moreInformation, setMoreInformation] = useState("");
  const [countriess, setCountriess] = useState([]);
  const [provincias, setProvincias] = useState([]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleCountryChange = (event) => {
    const selectedPais = event.target.value;
    setCountry(selectedPais);
    console.log("País seleccionado:", selectedPais);
    getProvincias(selectedPais); 
  };

  const handleProvinciaChange = (event) => {
    const selectedProvincia = event.target.value;
    setProvince(selectedProvincia);
    console.log("Provincia seleccionada:", selectedProvincia);
    setProvince(event.target.value);

  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleMoreInformationChange = (event) => {
    setMoreInformation(event.target.value);
  };

  const handleSubmit = () => {
    // Lógica para manejar la carga del microemprendimiento
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
    console.log("Formulario enviado");
  };


  const countries = new ServiceHttp("/countries");
  const provinces = new ServiceHttp("/provinces/byCountry");

  const getCountries = async () => {
    try {
      const data = await countries.get();
      console.log("Datos de countries:", data);
      if (data.error) throw data.error;
      setCountriess(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(error);
    }
  };

  const getProvincias = async (countryId) => {
    try {
      const data = await provinces.get({ countryId });
      console.log("Datos de provincias:", data);
      if (data.error) throw data.error;
      setProvincias(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
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
              onChange={handleCategoryChange}
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
              <MenuItem value="categoria1" sx={{ whiteSpace: "normal" }}>
                Economía social / Desarrollo local / Inclusión financiera
              </MenuItem>
              <MenuItem value="categoria2" sx={{ whiteSpace: "normal" }}>
                Agroecología / Orgánicos / Alimentación saludable
              </MenuItem>
              <MenuItem value="categoria3" sx={{ whiteSpace: "normal" }}>
                Conservación/ Regeneración / Servicios ecosistémicos
              </MenuItem>
              <MenuItem value="categoria4" sx={{ whiteSpace: "normal" }}>
                Empresas / Organismos de impacto / Economía circular
              </MenuItem>
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
                <span>{`${descripcion.length}/300`}</span>
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
