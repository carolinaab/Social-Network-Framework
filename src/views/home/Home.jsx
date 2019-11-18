import React, { Component, Fragment } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import 'firebase/auth';
import { firebaseApp } from '../../firebase/index';
import Navbar from '../../components/specific/navbar/Navbar'
import Container from '../../components/specific/containers/primary/Primary'
import './Home.css'



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: true
        };
    }

    handleOnClick = (e) => {
        this.setState({ logged: false });
    }

    render() {
        return (
            <Fragment>

                <Navbar />
                <Container />
            </Fragment>
        );
    }
}
const firebaseAppAuth = firebaseApp.auth();


export default withFirebaseAuth({
    firebaseAppAuth
})(Home);