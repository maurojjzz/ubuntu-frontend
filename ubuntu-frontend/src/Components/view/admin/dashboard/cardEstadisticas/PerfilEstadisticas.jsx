import { Box, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';

const PerfilEstadisticas = () => {
  const styleTitle = {
    fontFamily: "Lato",
    fontWeight: "600",
    fontSize: "22px",
    lineHeight: "30px",
    mb: "42px",
  };
  
  

  return (
    <Box sx={{mx:"2vh", marginBottom:"30px"}}>
      <Typography
        variant="h6"
        component="h6"
        align="center"
        mt={4}
        sx={styleTitle}
      >
        Visualizaciones por Publicación
      </Typography>





      <Box
        sx={{
          border: "1px solid #003459",
          borderRadius: "8px",
          padding: "16px",
          mb: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <Box>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            Inversiones Éticas: Más que ganancias
          </Typography>
          <Typography variant="body2" color="textSecondary">
            17/04/2023
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <VisibilityIcon sx={{ color: "#003459", mr: 1 }} />
          <Typography variant="body1" sx={{ fontWeight: 600, color: "#003459" }}>
            50
          </Typography>
        </Box>

        
      </Box>


      <Box
        sx={{
          border: "1px solid #003459",
          borderRadius: "8px",
          padding: "16px",
          mb: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "400px",
          margin: "0 auto",
          marginTop: "20px",
        }}
      >
        <Box>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            Inversiones Éticas: Más que ganancias
          </Typography>
          <Typography variant="body2" color="textSecondary">
            17/04/2023
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <VisibilityIcon sx={{ color: "#003459", mr: 1 }} />
          <Typography variant="body1" sx={{ fontWeight: 600, color: "#003459" }}>
            50
          </Typography>
        </Box>

        
      </Box>
    </Box>
  );
};

export default PerfilEstadisticas;
