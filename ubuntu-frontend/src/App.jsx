import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewMicroEmprendimientos from "./components/view/microEmprendimientos/ViewMicroEmprendimientos";
import LandingPage from "./components/view/landing/LandingPage";
import ViewPublicaciones from "./components/view/publicaciones/ViewPublicaciones";
import SearchResults from "./components/view/searchResults/SearchResults";
import Login from "../src/components/view/login/Login";
import { SearchProvider } from "./components/shared/searchContext/SearchContext";
import { GoogleOAuthProvider } from '@react-oauth/google'; 
import Navbar from "../src/components/navbar/Navbar";
import { AuthProvider } from "./token/auth/authProvider";

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <SearchProvider>
          <Router>
            <div>
              <Navbar />
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/microemprendimientos" element={<ViewMicroEmprendimientos />} />
                <Route path="/acceder" element={<Login />} />
                <Route path="/publicaciones" element={<ViewPublicaciones />} />
                <Route path="/buscar" element={<SearchResults />} />
              </Routes>
            </div>
          </Router>
        </SearchProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
