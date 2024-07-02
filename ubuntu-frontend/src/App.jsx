import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewMicroEmprendimientos from "./components/view/microEmprendimientos/ViewMicroEmprendimientos";
import { Typography } from "@mui/material";
import Login from "./components/view/login/Login";
import ViewPublicaciones from "./components/view/publicaciones/ViewPublicaciones";

function App() {
  return (
    // <Router>
    //   <div>
    //   <Typography variant="h1" color="primary-grisOscuro">
    //       Ubuntu
    //     </Typography>
    //     <Routes>
    //       <Route path="/microemprendimientos" element={<ViewMicroEmprendimientos />} />
    //       <Route path="/login" element={<Login />} />
    //     </Routes>
    //   </div>
    // </Router>
    <ViewPublicaciones></ViewPublicaciones>
  );
}

export default App;