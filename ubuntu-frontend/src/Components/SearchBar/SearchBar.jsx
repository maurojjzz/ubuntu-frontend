import { useState } from "react";
import { TextField, InputAdornment, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import theme from "../../theme/theme.js";

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
        backgroundColor: theme.palette.primary.main, 
        borderRadius: "20px", 
        padding: "1px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
        width:"90vw",
        border:"0",
        zIndex:"100"
      }}
    >
      <TextField
        variant="outlined"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Buscar Microemprendimiento"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
          sx: {
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            }}
        }}
        fullWidth
      />
    </Box>
  );
};

export default SearchBar;
