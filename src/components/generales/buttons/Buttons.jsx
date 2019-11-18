import React, { Component } from 'react';
import './Buttons.css'


class Button extends Component {
    render() {
        const { className, img, alt, onClick } = this.props;
        return (
            <button className={className} onClick={onClick}><img src={img} alt={alt} /></button>

        );
    }
}


export default Button;