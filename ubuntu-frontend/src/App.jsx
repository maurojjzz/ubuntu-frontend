import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewMicroEmprendimientos from "./components/view/microEmprendimientos/ViewMicroEmprendimientos";
import LandingPage from "./components/view/landing/LandingPage";
import ViewPublicaciones from "./components/view/publicaciones/ViewPublicaciones";
import SearchResults from "./components/view/searchResults/SearchResults";
import Login from "../src/components/view/login/Login";
import { SearchProvider } from "./components/shared/searchContext/SearchContext";
import { GoogleOAuthProvider } from '@react-oauth/google'; 
import Navbar from "../src/components/navbar/Navbar";
import { AuthProvider } from "./token/auth/AuthProvider";
import Microemprendimiento from "./components/view/admin/microemprendimiento/Microemprendimiento";

function App() {
  return (
    <SearchProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/microemprendimientos" element={<ViewMicroEmprendimientos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/publicaciones" element={<ViewPublicaciones />} />
            <Route path="/buscar" element={<SearchResults />} />
            {/* Solo para poder acceder a ellas ahora luego se modifica en proximo sprint */}
            <Route path="/admin/dashboard" element={<div> En desarrollo </div>} />
            <Route path="/admin/microemprendimientos" element={<Microemprendimiento />} />
            <Route path="/admin/solicitudes" element={<div> En desarrollo </div>} />
            <Route path="/admin/publicaciones" element={<div> En desarrollo </div>} />
          </Routes>
        </div>
      </Router>
    </SearchProvider>
  );
}

export default App;
