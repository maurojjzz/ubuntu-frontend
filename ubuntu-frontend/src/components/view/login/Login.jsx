import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import logoRegistro from "../../../assets/img/logo card ingreso registro.png";
import { useGoogleLogin } from '@react-oauth/google';
import { useAuth } from '../../shared/authContext/AuthContext';
import ButtonLogin from "./ButtonLogin";
import "./Login.css";

function Login() {
  const { handleLoginSuccess } = useAuth();

  const login = useGoogleLogin({
    onSuccess: handleLoginSuccess,
    onError: (error) => console.error(error),
  });

  return (
    <Box className="login__container">
      <Card className="login__container__card">
        <h2 className="login__container__card__titulo">Ingreso Administrador</h2>
        <Box className="login__container__card__logoContainer">
          <img src={logoRegistro} alt="logo registro" />
        </Box>
        <ButtonLogin onClick={() => login()} />
      </Card>
    </Box>
  );
}

export default Login;