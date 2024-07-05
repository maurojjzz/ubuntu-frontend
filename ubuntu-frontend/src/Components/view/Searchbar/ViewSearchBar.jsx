import Navbar from "../../Navbar/Navbar";
import SearchBar from "../../SearchBar/SearchBar";
import {
  Typography,
  Box,
  useTheme,
  Button,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
} from "@mui/material";

const ViewSearchBar = () => {
  const theme = useTheme();

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "488px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "20px 20px 0",
          position: "relative",
        }}
      >
        <SearchBar />
        
      </Box>
        
    </Box>
  );
};

export default ViewSearchBar;
