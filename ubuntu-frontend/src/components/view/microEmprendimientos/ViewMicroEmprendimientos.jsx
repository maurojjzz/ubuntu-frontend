import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Container, Grid } from "@mui/material";
import data from "../../../../data.json";
import CustomCard from "../../cards/MicroEmpCard";
import imagenmicro from "../../../assets/img/imagen microemprendimientos.jpg";
import SearchBar from "../../searchBar/SearchBar";
import SvgMicroemp from "../../svg/MicroEmprSvg";
import CategoryItem from "../../categoryItem/CategoryItem";
import SvgStyle from "../../svg/CategoriesSvg";

const ViewMicroEmprendimientos = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const theme = useTheme();

  const location = useLocation();
  const category = location.state?.category;

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredData = selectedCategory ? data.filter((cardData) => cardData.category === selectedCategory) : data;

  return (
    <Container sx={{ padding: "0px" }}>
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          color: "white",
          mb: 1,
          backgroundImage: `url(${imagenmicro})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          pl: 2,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            marginBottom: 6,
            marginTop: 3,
          }}
        >
          <SearchBar />
          <Typography
            sx={{
              fontFamily: "'Lato' ",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "24px",
              textAlign: "left",
              color: "white",
              marginTop: 4,
              marginBottom: 2,
            }}
          >
            MICROEMPRENDIMIENTOS
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Lato' ",
              fontWeight: "500",
              fontSize: "28px",
              lineHeight: "30px",
              textAlign: "left",
              marginTop: "1vh",
              color: "white",
            }}
          >
            Invertí sostenible
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Lato' ",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "32px",
              textAlign: "left",
              marginTop: "2vh",
              color: "white",
            }}
          >
            Explorá las categorías <br /> y encontrá la inversión <br />
            sostenible que mejor <br /> se ajuste a tus metas <br /> financieras
          </Typography>
        </Box>
      </Box>
      {!selectedCategory && (
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
          <Box sx={{ 
            textAlign: "center", 
            marginBottom: 4, 
            zIndex: 1, 
            width: "100%" 
          }}>
            <Typography
              sx={{
                fontFamily: "'Lato' ",
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "25px",
                textAlign: "center",
                color: "black",
                marginTop: "6vh",
                marginBottom: "32px",
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
                ".hovertiza": {
                  borderBottom: "none !important",
                },
              }}
            >
              <CategoryItem
                picUrl="Economia social.png"
                contentText="Economía social/Desarrollo local/ Inclusión financiera"
                bgColor="white"
                onClick={() => handleCategoryClick("Economía social/Desarrollo local/Inclusión financiera")}
              />
              <CategoryItem
                picUrl="Agroecologia.png"
                contentText="Agroecología/Orgánicos/ Alimentación saludable"
                bgColor="white"
                onClick={() => handleCategoryClick("Agroecología/Orgánicos/Alimentación saludable")}
              />
              <CategoryItem
                picUrl="Conservacion.png"
                contentText="Conservación/Regeneración/ Servicios ecosistémicos"
                bgColor="white"
                onClick={() => handleCategoryClick("Conservación/Regeneración/Servicios ecosistémicos")}
              />
              <CategoryItem
                picUrl="Empresas.png"
                contentText="Empresas/Organismos de impacto/Economía circular"
                bgColor="white"
                onClick={() => handleCategoryClick("Empresas/Organismos de impacto/Economía circular")}
              />
            </Box>
          </Box>
        </Box>
      )}
      {selectedCategory && (
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{}}>
            <Typography
              sx={{
                fontFamily: "'Lato' ",
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "25px",
                textAlign: "center",
                color: "black",
                marginTop: "6vh",
                marginBottom: "32px",
              }}
            >
              Categorías
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Lato' ",
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "30px",
                textAlign: "center",
                marginTop: "3vh",
                marginLeft: "6vh",
                marginRight: "6vh",
                color: theme.palette.primary.azul,
              }}
            >
              Agroecología/ Orgánicos/ Alimentación saludable
            </Typography>

            <SvgMicroemp />

            <Typography
              sx={{
                fontFamily: "'Lato' ",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "25px",
                textAlign: "center",
                marginTop: "2vh",
                marginLeft: "7vh",
                marginRight: "7vh",
                color: theme.palette.primary.negro,
              }}
            >
              Conectate con Microemprendimientos que respetan la tierra y priorizan la salud, a través de prácticas
              agrícolas limpias y alimentos nutritivos.
            </Typography>
          </Box>
          <Grid container spacing={3} sx={{ position: "relative", zIndex: 2, mt: "1vh" }}>
            {filteredData.map((cardData, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CustomCard
                  images={cardData.images}
                  title={cardData.title}
                  subtitle={cardData.subtitle}
                  category={cardData.category}
                  location={cardData.location}
                  details={cardData.descriptions}
                  moreInf={cardData.moreInformation}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default ViewMicroEmprendimientos;
