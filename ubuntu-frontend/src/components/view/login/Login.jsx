import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import AuthContext from '../../../token/auth/AuthProvider'; 
import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import logoRegistro from "../../../assets/img/logo card ingreso registro.png";
import ButtonLogin from "./ButtonLogin";
import "./Login.css";

function Login() {
  const location = useLocation();
  const { handleLoginSuccess } = useContext(AuthContext);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');

    if (token) {
      handleLoginSuccess({ token });
    }
  }, [location, handleLoginSuccess]);

  const handleLogin = () => {
    window.location.href = 'http://localhost:8080/api/v1/oauth2/authorization/google';
  };

  return (
    <Box className="login__container">
      <Card className="login__container__card">
        <h2 className="login__container__card__titulo">Ingreso Administrador</h2>
        <Box className="login__container__card__logoContainer">
          <img src={logoRegistro} alt="logo registro" />
        </Box>
        <ButtonLogin onClick={handleLogin} />
      </Card>
    </Box>
  );
}

export default Login;