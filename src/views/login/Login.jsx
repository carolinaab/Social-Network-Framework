import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import { firebaseApp } from '../../firebase/firebase';
import Input from '../../components/generales/inputs/Inputs'
import TextErrors from '../../components/generales/errors/Errors'
import Logo from '../../components/generales/logo/logo'
import Modal from 'react-responsive-modal';
import facebook from '../../img/facebook.png';
import gmail from '../../img/gmail.png';
import 'firebase/auth';
import './Login.css';

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    background: "rgba(216, 183, 183, 0.938)",
    display: "flex",
    flexDirection: "column",
    height: "70vh",

    padding: "1rem",
    justifyContent: "space-evenly"
};


class Login extends Component {
    state = {
        open: false,
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <div className="login" >
                <div className="conteiner-form">
                    <form>
                        <Logo />
                        <Input type="text" placeholder="Ingresa tu correo" />
                        <Input type="text" placeholder="Contraseña" />
                        <Input type="button" value="Iniciar Sesión" />


                    </form>
                    <div className="conteiner-button">
                        <button onClick={this.onOpenModal} className="button-modal">Regístrate</button>
                        <Modal open={open} onClose={this.onCloseModal} center >
                            <div style={styles}>
                                <Input type="text" placeholder="Nombre" />
                                <Input type="text" placeholder="Correo electrónico" />
                                <Input type="text" placeholder="Contraseña" />
                                <Input type="text" placeholder="Confirmar contraseña" />
                                <Input type="button" value="Iniciar Sesión" />
                                <p>Consulta <Link>Términos</Link> y <Link>Condiciones</Link></p>


                            </div>
                        </Modal>

                    </div>
                    <p>O inicia con</p>
                    <div className="logos">
                        <img src={facebook} alt="facebook" className="social-logo" />
                        <img src={gmail} alt="facebook" className="social-logo" />
                    </div>

                </div>


            </div>


        );
    }
}

export default Login;