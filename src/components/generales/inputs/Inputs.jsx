import React, { Component } from 'react';
import './Inputs.css';

class Inputs extends Component {

    render() {
        return (

            <input type={this.props.type} placeholder={this.props.placeholder} value={this.props.value} img={this.props.img} />
        );
    }
}

export default Inputs;