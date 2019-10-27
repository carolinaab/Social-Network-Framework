import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import { firebaseApp } from '../../firebase/firebase';
import Input from '../../components/generales/inputs/Inputs'
import TextErrors from '../../components/generales/errors/Errors'
import Logo from '../../components/generales/logo/logo'
import 'firebase/auth';
import './Login.css';



class Login extends Component {
    constructor() {
        super();
        this.state = { email: "", password: "" };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange(e) {
        const { value } = e.target;
        this.setState({ email: value });
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
                <main className="login">

                    <div className="contenedor">

                        <div className="user-inputs">
                            <Logo />
                            <Input type="email" onChange={this.handleEmailChange} />
                            <Input type="password" onChange={this.handlePasswordChange} />
                            {
                                user
                                    ? <Redirect to="/Home" />
                                    :
                                    <Input type="button" value="INICIAR SESIÓN" onClick={(e) => {
                                        signInWithEmailAndPassword(email, password)
                                    }} />

                            }
                            {error ? <TextErrors textColor="red" text={error} /> : ''}
                            {/* <Link to="/registro">
                            </Link> */}
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

