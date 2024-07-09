import Card from '@mui/material/Card';
import { Box } from '@mui/material';
import logoRegistro from '../../../assets/img/logo card ingreso registro.png';
import ButtonLogin from './ButtonLogin';
import "./Login.css";
import Navbar from '../../navbar/Navbar';

function Login() {
    return (
    <>
        <Navbar></Navbar>
        <Box className='login__container'>
            <Card className='login__container__card'>
                <h2 className='login__container__card__titulo'>Ingreso Administrador</h2>
                <Box className='login__container__card__logoContainer'>
                    <img src={logoRegistro} alt="logo registro"/>
                </Box>
                <ButtonLogin></ButtonLogin>
            </Card>
        </Box>
    </>
    )
}

export default Login;