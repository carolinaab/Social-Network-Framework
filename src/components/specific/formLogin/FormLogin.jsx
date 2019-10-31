// import React, { Component } from 'react';
// import Input from '../../generales/inputs/Inputs'
// import Logo from '../../generales/logo/logo'
// import { Link } from 'react-router-dom'
// // import Button from '../../generales/buttons/Buttons'
// import './FormLogin.css'

// class FormLogin extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { value: '' };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(e) {
//         this.setState({ value: e.target.value });
//     }

//     handleSubmit(e) {
//         alert('registro exitoso: ' + this.state.value);
//         e.preventDefault();
//     }
//     render() {

//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input type="email" value={this.state.value} onChange={this.handleChange} />
//                 <button onClick={(e) => {
//                     createUserWithEmailAndPassword(value)
//                 }}> Regístrate</button>
//             </form>
//         );
//     }
// }

// export default FormLogin;