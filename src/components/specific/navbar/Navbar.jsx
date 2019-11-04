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
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <a class="navbar-brand" href="#"><Logo className="logo-img" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav ml-auto">

                        <li class="nav-item">
                            <a class="nav-link" href="#">Chat</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Perfil</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Inicio</a>
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