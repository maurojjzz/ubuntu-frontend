import "./Navbar.css";
import { Box } from "@mui/material";
import DrawerComponent from "../drawerComponent/DrawerComponent";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{ height: "7vh", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}
      className="navBar__container"
    >
      <DrawerComponent />
      <img
        src="../../src/assets/img/logoubuntu.png"
        alt="Ubuntu Logo"
        className="navBar__logo"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      />
    </Box>
  );
}

export default Navbar;
