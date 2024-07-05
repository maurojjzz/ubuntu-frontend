import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewMicroEmprendimientos from "./Components/view/microEmprendimientos/ViewMicroEmprendimientos";
import LandingPage from "./Components/view/landing/LandingPage";
import ViewPublicaciones from "./Components/view/publicaciones/ViewPublicaciones";
import Login from "../src/Components/view/login/Login";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/microemprendimientos"
            element={<ViewMicroEmprendimientos />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/publicaciones"
            element={<ViewPublicaciones />}
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
