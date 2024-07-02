import Box from "@mui/material/Box";
import SearchBar from "../../SearchBar";
import backgroundImage from "../../../assets/img/imagenlanding.jpg";
import Navba from "../../Navbar";

const LandingPage = () => {
  return (
    <Box>
      <Navba />
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh", // Ajusta la altura según sea necesario
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "20px 20px 0",
        }}
      >
        <SearchBar />
      </Box>
      <Box> </Box>
      <Box></Box>
      <Box> </Box>
    </Box>
  );
};
export default LandingPage;
