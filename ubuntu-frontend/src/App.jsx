import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewMicroEmprendimientos from "./components/view/microEmprendimientos/ViewMicroEmprendimientos";
import LandingPage from "./components/view/landing/LandingPage";
import ViewPublicaciones from "./components/view/publicaciones/ViewPublicaciones";
import SearchResults from "./components/view/searchResults/SearchResults";
import Login from "../src/components/view/login/Login";
import { SearchProvider } from './components/shared/SearchContext';


function App() {
  return (
    <SearchProvider>
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
            <Route 
            path="/buscar" 
            element={<SearchResults />} />
          </Routes>
        </div>
      </Router>
    </SearchProvider>
  );
}
export default App;
