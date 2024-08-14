import { ChatBotBtn } from "../../../shared";
import { Box } from "@mui/material";
import CardEstadisticas from "./CardEstadisticas";

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexGrow: 1,
      }}
    >
      Dashboard en desarrollo
      <ChatBotBtn />
      <CardEstadisticas/>

    </Box>
  );
};
export default Dashboard;
