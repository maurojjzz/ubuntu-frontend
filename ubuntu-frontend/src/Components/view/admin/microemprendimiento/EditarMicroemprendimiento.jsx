import { Box, Typography, TextField, MenuItem, FormControl, InputLabel, Select, FormHelperText } from "@mui/material";
import { useState, useEffect } from "react";
import { ReusableButton, ImageEdit } from "../../../shared";
import { putMicrobusiness } from "../../../../utils/services/dashboard/ServiceMicroBusiness";
import { ServiceHttp } from "../../../../utils/services/serviceHttp";
import { getCategories } from "../../../../utils/services/dashboard/ServiceCategories";
import { ModalAlert } from "../../../shared";
import { useNavigate } from "react-router-dom";
import { getCountries } from "../../../../utils/services/dashboard/ServiceCountry";

const EditarMicroemprendimiento = ({ microBusinessId }) => {
  const [name, setName] = useState("");
  const [categoria, setCategoria] = useState("");
  const [provincia, setProvincia] = useState("");
  const [description, setDescription] = useState("");
  const [moreInformation, setMoreInformation] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const microemprendimientos = new ServiceHttp("/microbusiness");
  const [categories, setCategories] = useState([]);
  
  const [country, setCountry] = useState("");
  const [countriess, setCountriess] = useState([]);
  
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState("success");
  const [modalTitle, setModalTitle] = useState("");
  const [modalSubTitle, setModalSubTitle] = useState("");
  
  const navigate = useNavigate();

  const getMicroEmprendimiento = async (microBusinessId) => {
    try {
      const data = await microemprendimientos.getById(microBusinessId);
      if (data.error) throw data.error;

      console.log("Data del microemprendimiento correspondiente al id que llega de card:", data);

      // Buscar el name de la categoría correspondiente al description recibido
      const matchedCategory = categories.find((cat) => cat.description === data.categoryDescription);

      // Buscar el ID del país correspondiente al nombre recibido
      const matchedCountry = countriess.find((pais) => pais.name === data.provinceCountryName);

      // Actualizar el estado con la información recibida
      setName(data.name);
      setCategoria(matchedCategory ? matchedCategory.name : "");
      setCountry(matchedCountry ? matchedCountry.id : "");
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

  const fetchCountries = async () => {
    try {
      const data = await getCountries(); // Usar la función importada
      console.log("Países obtenidos:", data);
      setCountriess(data); // Establecer los países en el estado
    } catch (error) {
      console.error("Error al obtener países:", error);
    }
  };

  useEffect(() => {
    const initialize = async () => {
      await fetchCategories(); // Cargar las categorías primero
      await fetchCountries(); // Cargar los países
      getMicroEmprendimiento(microBusinessId); // Luego cargar los datos del microemprendimiento
    };

    initialize(); // Ejecuta la inicialización
  }, [microBusinessId]);

  useEffect(() => {
    if (categories.length > 0 && countriess.length > 0) {
      getMicroEmprendimiento(microBusinessId);
    }
  }, [categories, countriess, microBusinessId]);

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value); // Simplemente asignar el valor seleccionado
  };

  const handlePaisChange = (event) => {
    setCountry(event.target.value); // Asignar el ID del país seleccionado
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
      country: parseInt(country),
      province: {
        id: parseInt(province)
      }
    };
    const token = sessionStorage.getItem("token");

    console.log("ID del microemprendimiento:", microBusinessId);
    console.log("Datos del microemprendimiento a actualizar:", updatedMicroBusiness);
    console.log("Token de autenticación:", token);

    try {
      // Llamar al servicio para actualizar el microemprendimiento
      const data = await putMicrobusiness(microBusinessId, updatedMicroBusiness, token);
      console.log("Microemprendimiento actualizado:", data);

      setModalTitle("Cambios guardados con éxito");
      setModalStatus("success");
      setModalOpen(true);
    } catch (error) {
      console.error("Error al actualizar el microemprendimiento:", error);

      setModalTitle("Lo sentimos, los cambios no pudieron ser guardados.");
      setModalSubTitle("Por favor, volvé a intentarlo.");
      setModalStatus("error");
      setModalOpen(true);
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
                    width: "auto",
                    minWidth: "100%",
                  },
                },
              }}
            >
              {categories.map((cat) => (
                <MenuItem key={cat.name} value={cat.name} sx={{ whiteSpace: "normal" }}>
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
              value={country}
              onChange={handlePaisChange}
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
              {countriess.map((pais) => (
                <MenuItem key={pais.id} value={pais.id}>
                  {pais.name}
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
              value={provincia}
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
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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

        <ImageEdit />

        <ReusableButton nombre="Guardar cambios" handleClick={handleSubmit} />
      </Box>
      <ModalAlert
        status={modalStatus}
        title={modalTitle}
        subTitle={modalSubTitle}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSuccessAction={() => {
          navigate("/admin/microemprendimientos");
          setModalOpen(false);
        }}
        onTryAgain={() => setModalOpen(false)}
      />
    </Box>
  );
};

export default EditarMicroemprendimiento;
