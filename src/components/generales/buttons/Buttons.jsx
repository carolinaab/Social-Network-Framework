import React, { Component } from 'react';
import './Buttons.css'


class buttons extends Component {
    render() {
        return (
            <div className="conteiner-button">
                <input type="button" value={this.props.value} />
            </div>
        );
    }
}


export default buttons;