import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import { firebaseApp } from '../../firebase/firebase';
import Input from '../../components/generales/inputs/Inputs'
import TextErrors from '../../components/generales/errors/Errors'
import Logo from '../../components/generales/logo/logo'
import Modal from 'react-responsive-modal';
import 'firebase/auth';
import './Login.css';

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    background: "green",
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
                        <Modal style={styles} open={open} onClose={this.onCloseModal} >
                            <h2>simple</h2>

                        </Modal>

                    </div>
                    <p>O inicia con</p>
                </div>


            </div>


        );
    }
}

export default Login;