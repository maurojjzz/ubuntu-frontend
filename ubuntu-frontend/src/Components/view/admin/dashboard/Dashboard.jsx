import { ChatBotBtn } from "../../../shared";
import { Box } from "@mui/material";

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
    </Box>
  );
};

export default Dashboard;
