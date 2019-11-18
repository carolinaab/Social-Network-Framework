import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import * as firebase from 'firebase/app';
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

    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        })

    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(error => {
                console.error(error);
            })

    }


    render() {
        const { open } = this.state;
        return (

            <div className='conteiner-button'>
                <button onClick={this.toggleModal.bind(this, true)} className='button-modal'>Regístrate</button>
                <Modal open={open} onClose={this.toggleModal.bind(this, false)} center >
                    <div style={styles}>
                        <form onSubmit={this.handleOnSubmit}>
                            <div className='user-inputs'>

                                <Input
                                    type='email'
                                    name='email'
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    placeholder='Correo electrónico' />
                                <Input
                                    type='password'
                                    name='password'
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    placeholder='Contraseña' />
                                < input type='submit' className='button' value='Regístrate' />


                            </div>

                        </form>

                    </div>
                </Modal>

            </div >

        );
    }
}


export default Register;


