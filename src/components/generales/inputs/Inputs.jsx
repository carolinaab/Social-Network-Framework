import React, { Component } from 'react';
import './Inputs.css';

class Inputs extends Component {
    render() {
        const { id, type, name, autoComplete, className, value, onChange, placeholder, confirmPassword } = this.props;
        return (
            <input
                id={id}
                type={type}
                name={name}
                autoComplete={autoComplete}
                className={className}
                value={value}
                onChange={onChange}
                placeholder={placeholder}

            />
        );
    }
}

export default Inputs;