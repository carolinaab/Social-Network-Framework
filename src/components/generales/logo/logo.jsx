import React, { Component } from 'react';
import logo from '../../../img/fit-blanco.png';
import './logo.css'


//Creating logo component
class Logo extends Component {
    render() {
        return (
            <div className="conteiner-img">
                <img src={logo} alt="fitclub" className="img" />
            </div>
        )
    }
};


export default Logo;