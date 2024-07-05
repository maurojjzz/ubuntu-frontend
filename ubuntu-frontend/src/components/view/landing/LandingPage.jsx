import { Typography, Box, useTheme, Button } from "@mui/material";
import SearchBar from "../../SearchBar/SearchBar";
import backgroundImage from "../../../assets/img/imagenlanding.jpg";
import CategoryItem from "../../CategoryItem/CategoryItem";
import Navbar from "../../Navbar/Navbar";
import SvgStyle from "../../svg/CategoriesSvg";

const LandingPage = () => {
  const theme = useTheme();

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
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
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "488px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
        >
          <Typography
            align="left"
            sx={{
              color: theme.palette.primary.main,
              fontFamily: "Lato",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "24px",
              textTransform: "uppercase",
              mt: "120px",
              ml: "16px",
            }}
          >
            FINANCIAMIENTO SOSTENIBLE
          </Typography>
          <Typography
            align="left"
            variant="h5"
            sx={{
              color: theme.palette.primary.main,
              fontFamily: "Lato",
              fontWeight: "500",
              fontSize: "28px",
              lineHeight: "33px",
              ml: "16px",
              minWidth: "240px",
              width: "55vw",
              mt: "16px",
            }}
          >
            Impulsamos el desarrollo de finanzas de impacto, liderando
            transición hacia un modelo financiero sostenible
          </Typography>
        </Box>
      </Box>
      {/* inicio objetivos ubuntu */}
      <Box></Box>
      {/* fin objetivos ubuntu */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SvgStyle/>
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
            zIndex: 1,
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
            zIndex: 1,
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
            zIndex: 1,

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
            zIndex: 1,
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
