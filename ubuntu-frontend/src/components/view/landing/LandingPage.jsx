import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import DrawerComponent from "../../DrawerComponent";
import logo from "../../../assets/img/logoubuntu.png";
import SearchBar from "../../SearchBar";
import backgroundImage from "../../../assets/img/imagenlanding.jpg";

const LandingPage=()=> {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          position: "static",
          color: "grey",
        }}
      >
        <Toolbar variant="dense">
          <DrawerComponent />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              width: "100vw",
              color: "inherit",
              component: "div",
            }}
          >
            <img src={logo} alt="logo" />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh", // Ajusta la altura según sea necesario
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "20px 20px 0",
        }}
      >
        <SearchBar />
      </Box>
      <Box> </Box>
      <Box> </Box>
      <Box> </Box>
    </Box>
  );
}
export default LandingPage;