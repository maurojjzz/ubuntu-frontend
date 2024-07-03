import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewMicroEmprendimientos from "./components/view/microEmprendimientos/ViewMicroEmprendimientos";
import LandingPage from "./components/view/landing/LandingPage";
import Login from "./components/view/login/Login";

function App() {
  return (
    <Router>
      <div>
          <Routes>
          <Route
            path="/"
            element={<LandingPage />}
          />
          <Route
            path="/microemprendimientos"
            element={<ViewMicroEmprendimientos />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
