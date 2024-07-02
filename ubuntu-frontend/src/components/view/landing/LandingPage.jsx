import DrawerComponent from "../../DrawerComponent";
import logo from "../../../assets/img/logoubuntu.png";
import SearchBar from "../../SearchBar";
import backgroundImage from "../../../assets/img/imagenlanding.jpg";
import { Typography, Toolbar, Box, AppBar } from "@mui/material";

const LandingPage = () => {
  return (
    <Box
      sx={{
        displayflexGrow: 1,
      }}
    >
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
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "20px 20px 0",
        }}
      >
        <SearchBar />
      </Box>
      <Box></Box>
      <Box>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            textAlign: "center",
            fontFamily: "'Lato', sans-serif",
            fontSize: "32px",
            lineHeight: "40px",
          }}
        >
          Microemprendimientos Ubuntu
        </Typography>
      </Box>
      <Box> </Box>
    </Box>
  );
};
export default LandingPage;
