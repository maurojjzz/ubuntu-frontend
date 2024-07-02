import { useTheme } from "@mui/material/styles";

import { Box, Typography, Container, Grid } from "@mui/material";
import data from "../../../../data.json";
import CustomCard from "../../Cards/microEmpCard";
import imagenmicro from "../../../assets/img/imagen microemprendimientos.jpg";

const ViewMicroEmprendimientos = () => {
  const theme = useTheme();


  return (
    <Container sx={{ padding: "0px" }}>
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          color: "white",
          mb: 4,
          backgroundImage: `url(${imagenmicro})`,          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "55vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            // maxWidth: '70%',
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Lato' ",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "24px",
              textAlign: "left",
              marginTop: "1vh",
              color: "white",
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
            Explorá las categorías <br /> y encontrá la inversión <br />sostenible que mejor <br /> se ajuste a tus metas <br /> financieras
          </Typography>
        </Box>



      </Box>
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography 
        sx={{
          fontFamily: "'Lato' ",
          fontWeight: "600",
          fontSize: "24px",
          lineHeight: "25px",
          textAlign: "center",
          // mt: "1",
          color: "negro",
        }}>
          Categorías
        </Typography>

        <Typography 
        sx={{
          fontFamily: "'Lato' ",
          fontWeight: "600",
          fontSize: "24px",
          lineHeight: "25px",
          textAlign: "center",
          marginTop: "4vh",
          color: theme.palette.primary.azul
        }}>
          Agroecología/Orgánicos/Alimentación saludable
        </Typography>


        <Typography variant="body1" component="p" sx={{ marginTop: 1 }}>
          Conectate con Microemprendimientos que respetan la tierra y priorizan
          la salud, a través de prácticas agrícolas limpias y alimentos
          nutritivos.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {data.map((cardData, index) => (
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
    </Container>
  );
};

export default ViewMicroEmprendimientos;