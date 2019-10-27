import React, { Component } from 'react';
import logo from '../../../img/fit-blanco.png';


//Creating logo component
class Logo extends Component {
    render() {
        return (
            <figure>
                <img src={logo} alt="fitclub" />
            </figure>
        )
    }
};


export default Logo;