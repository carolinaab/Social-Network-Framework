import React, { Component } from 'react';
import './Buttons.css'


class Button extends Component {
    render() {
        const { text, className, img, alt } = this.props;
        return (
            <div className="conteiner-button">
                <button className={className}>{text}<img src={img} alt={alt} /></button>
            </div>
        );
    }
}


export default Button;