import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../generales/logo/logo'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import './Navbar.css'

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                <a className="navbar-brand"><Logo className="logo-img" /></a>
                <button className="navbar-toggler collapsed"
                    type="button"
                    data-target="#bs-example-navbar-collapse-1"
                    data-target="#navbarColor01"
                    aria-controls="navbarColor01"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/Home" className="nav-link">
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Profile" className="nav-link">
                                Perfil
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Chat</a>
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