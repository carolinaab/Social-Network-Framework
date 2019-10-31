import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseApp } from '../../firebase/firebase';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: true
        };
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(e) {
        this.setState({ logged: false });
    }
    render() {
        return (
            <Fragment>
                <h1>este es el home</h1>
                <Link to="/">
                    <button onClick={() => {
                        firebase.auth().signOut()
                            .then(() => console.log('sesion cerrada')).catch(() => console.error)
                    }}> salir
                    </button>
                </Link>
            </Fragment>
        );
    }
}
const firebaseAppAuth = firebaseApp.auth();


export default withFirebaseAuth({
    firebaseAppAuth
})(Home);