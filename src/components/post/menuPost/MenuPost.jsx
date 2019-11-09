import React, { Component } from 'react';
import './MenuPost.css';

class MenuPost extends Component {
    render() {
        const { handleEditClick, handleEliminateClick } = this.props;

        return (
            <menu className='menu-post-card'>
                <label onClick={handleEditClick}>
                    <i className='material-icons'>edit</i>
                    Editar
                </label>
                <label onClick={handleEliminateClick}>
                    <i className='material-icons'>delete</i>
                    Borrar
                </label>

            </menu>
        );
    }
}

export default MenuPost;
