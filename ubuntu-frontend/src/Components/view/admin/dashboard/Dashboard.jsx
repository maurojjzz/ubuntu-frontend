import { Box } from "@mui/material";
import CardEstadisticas from "./cardEstadisticas/CardEstadisticas";

const Dashboard = () => {
  return (
    <Box sx={{display: 'flex', margin: '5vw'}}>
      <CardEstadisticas/>
    </Box>
  );
};

export default Dashboard;
