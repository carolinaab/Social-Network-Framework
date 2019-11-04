import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import { firebaseApp } from '../../../firebase/index';
import Input from '../../generales/inputs/Inputs';
import 'firebase/auth';
import './Register.css'




const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    background: 'rgba(216, 183, 183, 0.938)',
    display: 'flex',
    flexDirection: 'column',
    height: '70vh',

    justifyContent: 'space-evenly'
};

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            open: false,
        };
    }

    toggleModal = (isOpen) => {
        this.setState({ open: isOpen })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {
        const {
            user,
            createUserWithEmailAndPassword,
            error
        } = this.props;

        const { email, password } = this.state;

        const { open } = this.state;
        return (

            <div className='conteiner-button'>
                <button onClick={this.toggleModal.bind(this, true)} className='button-modal'>Regístrate</button>
                <Modal open={open} onClose={this.toggleModal.bind(this, false)} center >
                    <div style={styles}>
                        <form>
                            <div className='user-inputs'>
                                <Input
                                    type='email'
                                    name='email'
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    placeholder='correo electrónico' />
                                <Input
                                    type='password'
                                    name='password'
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    placeholder='contraseña' />

                                {
                                    (user === null)
                                        ? < button onClick={createUserWithEmailAndPassword(email, password)}
                                            className='button'>Regístrate</button>
                                        : <p style='color:red'>Error al crear cuenta</p>
                                }

                            </div>

                        </form>

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


