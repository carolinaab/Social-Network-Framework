import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../../generales/logo/logo'
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseApp } from '../../../firebase/index';
import './Navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#"><Logo className="logo-img" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item">
                            <a className="nav-link" href="#">Chat</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Perfil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Inicio</a>
                        </li>
                        <Link to="/">
                            <button className="button-close" onClick={() => {
                                firebase.auth().signOut()
                                    .then(() => console.log('sesion cerrada')).catch(() => console.error)
                            }}> Cerrar Sesión
                                   </button>
                        </Link>

                    </ul>

                </div>
            </nav>
        );
    }
}

export default Navbar;