import React from 'react'
import Card from '@mui/material/Card';
import logoRegistro from '../../../assets/img/logo card ingreso registro.png'
import "./Login.css"
import ButtonLogin from './ButtonLogin';

function Login() {
    return (
    <>
        {/* <navbar></navbar> Debe agregarse el componente Navbar*/}
        <div className='login__container'>
            <Card className='login__container__card'>
                <h2 className='login__container__card__titulo'>Ingreso administrador</h2>
                <div className='login__container__card__logoContainer'>
                    <img src={logoRegistro} alt="logo registro"/>
                </div>
                <ButtonLogin></ButtonLogin>
            </Card>
        </div>

    </>
    )
}

export default Login;