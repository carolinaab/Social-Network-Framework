import React, { Component } from 'react';
import logo from '../../../img/fit-blanco.png';
import './logo.css'


//Creating logo component
class Logo extends Component {

    render() {
        const { className } = this.props
        return (
            <div className="conteiner-img">
                <img src={logo} alt="fitclub" className={className} />
            </div>
        )
    }
};


export default Logo;