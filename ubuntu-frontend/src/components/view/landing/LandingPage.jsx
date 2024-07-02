import { Typography, Toolbar, Box, AppBar, useTheme, Button } from "@mui/material";
import DrawerComponent from "../../DrawerComponent";
import logo from "../../../assets/img/logoubuntu.png";
import SearchBar from "../../SearchBar";
import backgroundImage from "../../../assets/img/imagenlanding.jpg";

import CategoryItem from "../../CategoryItem";

const LandingPage = () => {
  const theme = useTheme();

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body1"
          align="center"
          sx={{
            color: theme.palette.primary.negro,
            fontFamily: "Lato",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "25px",
            mt: "32px",
            letterSpacing: "0.5px",
          }}
        >
          Microemprendimientos Ubuntu
        </Typography>
        <Typography
          variant="h4"
          align="center"
          sx={{
            color: theme.palette.primary.negro,
            fontFamily: "Lato",
            fontWeight: "600",
            fontSize: "22px",
            lineHeight: "25px",
            mt: "10px",
            mb: "32px",
          }}
        >
          Categorías
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            mb: "24px",
          }}
        >
          <CategoryItem
            picUrl="Economia social.png"
            contentText="Economía social/Desarrollo local/ Inclusión financiera"
          />
          <CategoryItem 
            picUrl="Agroecologia.png" 
            contentText="Agroecología/Orgánicos/ Alimentación saludable" 
          />
          <CategoryItem 
            picUrl="Conservacion.png" 
            contentText="Conservación/Regeneración/ Servicios ecosistémicos" 
          />
          <CategoryItem 
            picUrl="Empresas.png" 
            contentText="Empresas/Organismos de impacto/Economía circular" 
          />
        </Box>
          <Button 
            variant="contained" 
            sx={{
              backgroundColor: theme.palette.primary.azul,
              width: "184px",
              height: "40px",
              borderRadius: "100px",
              mb: "40px",
              "&:hover": {
                  backgroundColor: "#0E537B",
              }
            }} 
            onClick={() => {console.log("Ver más categorias")}}
          >
            <Typography 
              variant="p"
              sx={{
                textTransform: "none",
                color: theme.palette.primary.main,
                fontFamily: "Lato",
                fontWeight: "700",
                fontSize: "16px",
                
              }}
            >
              Ver más categorias
            </Typography>
            
          </Button>
      </Box>
      <Box></Box>
    </Box>
  );
};
export default LandingPage;
