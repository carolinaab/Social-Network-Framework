import React, { Component, Fragment } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import 'firebase/auth';
import { firebaseApp } from '../../firebase/index';
import Navbar from '../../components/specific/navbar/Navbar'
import Container from '../../components/specific/containers/PostContainer/PostContainer'
import './Home.css'



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false
        };
    }

    handleOnClick = (e) => {
        this.setState({ logged: true });
    }

    render() {
        return (
            <Fragment>
                <main className="container-Home">
                    <Navbar />
                    <Container />
                </main>

            </Fragment>
        );
    }
}
const firebaseAppAuth = firebaseApp.auth();


export default withFirebaseAuth({
    firebaseAppAuth
})(Home);