import { useState, useEffect } from "react";
import { Typography, Box, useTheme, List, ListItem, ListItemIcon } from "@mui/material";
import { ButtonShowMore } from "../../shared";
import SearchBar from "../../searchBar/SearchBar";
import backgroundImage from "../../../assets/img/imagenlanding.jpg";
import Navbar from "../../navbar/Navbar";
import CategoryItem from "../../categoryItem/CategoryItem";
import SvgStyle from "../../svg/CategoriesSvg";
import CircleIcon from "@mui/icons-material/Circle";
import jsonData from "../../../assets/json/publicaciones.json";
import PublicacionesCard from "../../cards/PublicacionesCard.jsx";

const LandingPage = () => {
  const [data, setData] = useState([]);

  const theme = useTheme();

  useEffect(() => {
    setData(jsonData);
  }, []);

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
            Impulsamos el desarrollo de finanzas de impacto, liderando transición hacia un modelo financiero sostenible
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "0.5rem 0 1rem 0",
          margin: "1rem 1rem 0rem",
          with: "20.5rem",
          heigt: "15rem",
          borderTop: "1px solid #226516",
          borderBottom: "1px solid #226516",
          gap: "0.5rem",
        }}
      >
        <Typography
          sx={{
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            textAlign: "center",
            color: "#093C59",
            fontFamily: "Lato",
            fontWeight: "700",
            fontSize: "22px",
            lineHeight: "25px",
            minWidth: "240px",
            width: "90vw",
          }}
        >
          Objetivos de Ubuntu
        </Typography>
        <Box>
          <List>
            <ListItem>
              <ListItemIcon
                sx={{
                  alignSelf: "flex-start",
                  color: "black",
                  minWidth: "1.5rem",
                  height: "1rem",
                  paddingTop: "0.2rem",
                }}
              >
                <CircleIcon sx={{ fontSize: "0.8rem", paddingTop: "0.25rem" }} />
              </ListItemIcon>
              Facilitar a productores o microemprendedores el acceso a microcréditos que les permitan desarrollar sus
              iniciativas empresariales.
            </ListItem>
            <ListItem>
              <ListItemIcon
                sx={{
                  alignSelf: "flex-start",
                  color: "black",
                  minWidth: "1.5rem",
                  height: "1rem",
                  paddingTop: "0.2rem",
                }}
              >
                <CircleIcon sx={{ fontSize: "0.8rem", paddingTop: "0.25rem" }} />
              </ListItemIcon>
              Proporcionar financiación a empresas y organizaciones que ejecutan proyectos con objetivos sociales,
              ambientales y culturales.
            </ListItem>
            <ListItem>
              <ListItemIcon
                sx={{
                  alignSelf: "flex-start",
                  color: "black",
                  minWidth: "1.5rem",
                  height: "1rem",
                  paddingTop: "0.2rem",
                }}
              >
                <CircleIcon sx={{ fontSize: "0.8rem", paddingTop: "0.25rem" }} />
              </ListItemIcon>
              Ofrecer a potenciales inversores la oportunidad de participar en proyectos con impacto significativo.
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SvgStyle />
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
          <CategoryItem picUrl="Agroecologia.png" contentText="Agroecología/Orgánicos/ Alimentación saludable" />
          <CategoryItem picUrl="Conservacion.png" contentText="Conservación/Regeneración/ Servicios ecosistémicos" />
          <CategoryItem picUrl="Empresas.png" contentText="Empresas/Organismos de impacto/Economía circular" />
        </Box>

        <ButtonShowMore 
          btnText="Ver mas categorías" 
          btnAction={() => console.log("ver mas categorias clicked")} 
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          zIndex: 10,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: "3vw",
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
            zIndex: 1,
          }}
        >
          Publicaciones
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
            mb: "16px",
            zIndex: 1,
          }}
        >
          Finanzas con impacto
        </Typography>

        {data.slice(0, 3).map((item) => (
          <PublicacionesCard
            key={item.title}
            title={item.title}
            images={item.images}
            date={item.date}
            text={item.text}
          />
        ))}
        <ButtonShowMore 
          btnText="Ir a Publicaciones" 
          btnAction={() => console.log("ver mas publicaciones clicked")} 
        />
      </Box>
    </Box>
  );
};

export default LandingPage;
