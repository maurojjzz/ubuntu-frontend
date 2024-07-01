import { Typography, Container } from "@mui/material";
import LandingPage from "./components/view/landing/LandingPage";
import SearchBar from "./components/SearchBar";


function App() {
  return (
    <>
      <Container>
        <LandingPage />
        <SearchBar/>
      </Container>
    </>
  );
}

export default App;
