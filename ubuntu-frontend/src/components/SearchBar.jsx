import React, { useState } from "react";
import { TextField, InputAdornment, IconButton, Box, colors } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log("Search term:", searchTerm);
  };

  return (
    <Box
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Fondo blanco semi-transparente
        borderRadius: "20px", // Borde redondeado
        padding: "1px", // Espaciado interno
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Sombra
        width:"90vw",
      }}
    >
      <TextField
        variant="outlined"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Buscar Microemprendimiento"
        InputProps={{
            bordercolor:"transparent",
          startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
      />
    </Box>
  );
};

export default SearchBar;
