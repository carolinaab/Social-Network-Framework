import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseApp } from '../../firebase/index';
import Logo from '../../components/generales/logo/logo';
import Input from '../../components/generales/inputs/Inputs';
import TextErrors from '../../components/textErrors/index';
import Register from '../../components/specific/register/Register';
import Button from '../../components/generales/buttons/Buttons'
import google from '../../img/gmail.png'
import facebook from '../../img/facebook.png'
import './Login.css';



class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const {
            user,
            error,
            signInWithEmailAndPassword,
        } = this.props;

        const { email, password } = this.state;
        return (
            <Fragment>
                <main className='login' >
                    <div className='container-form'>
                        <Logo className="img-logo" />
                        <div className='user-inputs'>
                            <Input
                                type='email'
                                name='email'
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                placeholder='Correo electrónico'
                                className='inputs' />
                            <Input
                                type='password'
                                name='password'
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                placeholder='Contraseña'
                                className='inputs' />

                            {
                                user
                                    ? <Redirect to='/Home/' />
                                    :
                                    <button className='button' onClick={(e) => {
                                        signInWithEmailAndPassword(email, password)
                                    }}> Iniciar </button>
                            }

                            {error ? <TextErrors textColor='red' text={error} /> : ''}


                            <Register />
                            <p>O inicia con</p>
                        </div>
                        <div className='social-logo'>
                            <Button img={google} className='logos' />
                            <Button img={facebook} className='logos' />
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