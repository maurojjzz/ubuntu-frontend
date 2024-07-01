import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewMicroEmprendimientos from "./components/view/microEmprendimientos/ViewMicroEmprendimientos";
import { Typography } from "@mui/material"; 

function App() {
  return (
    <Router>
      <div>
      <Typography variant="h1" color="primary-grisOscuro">
          Ubuntu
        </Typography>

        
        <Routes>
          <Route path="/microemprendimientos" element={<ViewMicroEmprendimientos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;