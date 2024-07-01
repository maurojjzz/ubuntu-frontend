import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DrawerComponent from "../../DrawerComponent";
import logo from "../../../assets/img/logoubuntu.png";
import SearchBar from "../../SearchBar";
import backgroundImage from "../../../assets/img/imagenlanding.jpg";

const LandingPage=()=> {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="grey">
        <Toolbar variant="dense">
          <DrawerComponent />
          <Typography
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100vw"
            variant="h6"
            color="inherit"
            component="div"
          >
            <img src={logo} alt="logo" margin-left="5 rem" />
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh", // Ajusta la altura según sea necesario
          display: "flex",
          justifyContent: "center",
          alignItems: "center",}}>
        <SearchBar/>
      </Box>
    </Box>
  );
}
export default LandingPage;