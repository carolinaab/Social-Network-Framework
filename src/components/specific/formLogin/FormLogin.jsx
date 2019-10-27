import React, { Component } from 'react';
import Inputs from '../../generales/inputs/Inputs'
import Logo from '../../generales/logo/logo'
// import Button from '../../generales/buttons/Buttons'
import './FormLogin.css'

class FormLogin extends Component {

    render() {

        return (
            <div className="conteiner-form">
                <form>
                    <Logo />
                    <Inputs type="email" placeholder="correo electrónico" />
                    <Inputs type="password" placeholder="contraseña" />
                    <Inputs type="button" value="Iniciar Sesión" />
                    <p className="register">Regístrate</p>
                    <p>o inicia con</p>

                </form>
            </div>
        );
    }
}

export default FormLogin;