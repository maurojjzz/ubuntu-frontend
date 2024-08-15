import { useEffect, useState } from "react";
import { ChatBotBtn, UbuntuLoader } from "../../../shared";
import { Box, Typography } from "@mui/material";
import CardEstadisticas from "./cardEstadisticas/CardEstadisticas";
import CardMicrobusinessMonthly from "./cardMicrobusinessMonthly/CardMicrobusinessMonthly";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const styleTitle = {
    fontFamily: "Lato",
    fontWeight: "600",
    fontSize: "22px",
    lineHeight: "30px",
    mb: "42px",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexGrow: 1,
      }}
    >
      <Typography
        variant={"h4"}
        component={"h6"}
        sx={{
          fontFamily: "Lato",
          fontWeight: "500",
          fontSize: "28px",
          lineHeight: "35px",
          mt: "40px",
          mb: "24px",
        }}
      >
        Dashboard Administrador
      </Typography>
      <Typography variant={"h6"} component={"h6"} sx={styleTitle}>
        Estadísticas mensuales
      </Typography>
      <CardMicrobusinessMonthly />
      <CardEstadisticas />
      {/* inicio micromprendimiento por categoria  */}
      
      {/* fin micromprendimiento por categoria  */}
      <Typography variant={"h6"} component={"h6"} mt={4} sx={styleTitle}>
        Visualizaciones por Publicación
      </Typography>
      {/* inicio visualizaciones por publicacion  */}
      
      {/* fin visualizaciones por publicacion  */}
      <ChatBotBtn />
      {loading && <UbuntuLoader />}
    </Box>
  );
};
export default Dashboard;
