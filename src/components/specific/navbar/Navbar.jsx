import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Logo from '../../generales/logo/logo';
import "./Navbar.css";
import { CSSTransition } from "react-transition-group";
import * as firebase from 'firebase/app';
import 'firebase/auth';
import './Navbar.css'





export default function Navbar() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <nav className=" navbar navbar-expand-lg navbar-dark bg-primary sticky-top">

            <img src={require("../../../img/fit-blanco.png")} className="Logo" alt="logo" />

            <CSSTransition
                in={!isSmallScreen || isNavVisible}
                timeout={350}
                classNames="NavAnimation"
                unmountOnExit
            >

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


            </CSSTransition>
            <button onClick={toggleNav} className="Burger" style={{ outline: "none" }}>
                <i className="material-icons" style={{ color: "white" }}>dehaze</i>

            </button>
        </nav>
    );
}
