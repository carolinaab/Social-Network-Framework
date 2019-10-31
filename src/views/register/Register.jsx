import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import { Redirect, Link } from 'react-router-dom';
import Input from '../../components/generales/inputs/Inputs'
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import { firebaseApp } from '../../firebase/firebase';
import FormLogin from '../../components/specific/formLogin/FormLogin'
import 'firebase/auth';




const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    background: "rgba(216, 183, 183, 0.938)",
    display: "flex",
    flexDirection: "column",
    height: "70vh",
    padding: "1rem",
    justifyContent: "space-evenly"
};

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            open: false,
        };

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    // handleSubmit(e) {
    //     alert('registro exitoso: ' + this.state.value);
    //     e.preventDefault();
    //     console.log(this.state.value)
    // }




    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const {
            user,
            singnOut,
            createUserWithEmailAndPassword,
            error
        } = this.props;
        console.log(user)
        const { email, password } = this.state;

        const { open } = this.state;
        return (

            <div className="conteiner-button">
                <button onClick={this.onOpenModal} className="button-modal">Regístrate</button>
                <Modal open={open} onClose={this.onCloseModal} center >
                    <div style={styles}>
                        <form>
                            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />

                            {
                                (user === null)
                                    ? < button onClick={createUserWithEmailAndPassword(email, password)}> Regístrate</button>
                                    // ? <Redirect to="/Home/" />
                                    : <p>{error}</p>
                            }


                        </form>




                        {/* <p>Consulta <Link>Términos</Link> y <Link>Condiciones</Link></p> */}


                    </div>
                </Modal>

            </div >

        );
    }
}
const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Register);


