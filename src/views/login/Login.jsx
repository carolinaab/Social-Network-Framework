import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import { firebaseApp } from '../../firebase/firebase';
import Input from '../../components/generales/inputs/Inputs'
import TextErrors from '../../components/generales/errors/Errors'
import Logo from '../../components/generales/logo/logo'
// import facebook from '../../img/facebook.png';
import Register from '../register/Register'
// import gmail from '../../img/gmail.png';
import 'firebase/auth';
import './Login.css';



class Login extends Component {
    // estados y funciones
    constructor() {
        super();
        this.state = { email: "", password: "" }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    handleEmailChange(e) {
        const { value } = e.target;
        this.setState({ email: value })
    }
    handlePasswordChange(e) {
        const { value } = e.target;
        this.setState({ password: value });
    }
    render() {
        const {
            user,
            signInWithEmailAndPassword,
            error
        } = this.props;
        const { email, password } = this.state;
        return (
            <Fragment>
                <main className="login" >
                    <div className="conteiner-form">
                        <Logo />
                        <div className="user-inputs">
                            <Input value={email} onChange={this.handleEmailChange} type="email" placeholder="Correo electrónico" />
                            <Input value={password} onChange={this.handlePasswordChange} type="password" placeholder="Contraseña" />
                            {
                                user
                                    ? <Redirect to="/Home/" />
                                    :
                                    <button onClick={(e) => {
                                        signInWithEmailAndPassword(email, password)
                                    }}> iniciar </button>



                            }
                            {error ? <TextErrors textColor="red" text={error} /> : ''}
                            <Register />




                            <p>O inicia con</p>


                        </div>
                    </div>

                </main>

            </Fragment>
        )
    }
}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);