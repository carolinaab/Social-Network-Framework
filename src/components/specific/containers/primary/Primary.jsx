import React, { Component } from 'react';
import Img from '../../../../img/plan-muro.jpg';
import Post from '../../../post/create/Create';
import Show from '../../../post/show/Show';

import './Primary.css'


class Containers extends Component {

    render() {
        return (
            <main className='container-main'>
                <div className='container-menu'>
                    <ul>
                        <li>
                            <i class="material-icons" style={{ color: '#4981b8' }}>mail</i>
                            Mensajes
                        </li>
                        <li>
                            <i class="material-icons" style={{ color: '#e4db32' }}>star</i>
                            Favoritos
                        </li>
                        <li>
                            <i class="material-icons" style={{ color: '#93684e' }}>group</i>
                            Amigos
                        </li>
                        <li>
                            <i class="material-icons" style={{ color: '#268759' }}>notifications</i>
                            Notificaciones
                        </li>
                    </ul>

                </div>
                <div className='container-post'>
                    <div className='container-textarea'>
                        <Post />
                    </div>

                    <div className='container-show'>
                        <Show />
                    </div>



                </div>

                <div className='container-img'>
                    <strong> <p>Artículos relacionados</p></strong>

                    <img src={Img} alt="plan" className="plan-img" />
                    <p>
                        Algunos de los objetivos de este tipo
                        de entrenamiento es mejorar la resistencia
                        y la fuerza del individuo. Para conseguirlo es
                        indispensable que la rutina deportiva se realice
                        como mínimo dos o tres veces a la semana. <small style={{ color: '#385898' }}>Leer más</small>
                    </p>
                </div>
            </main>

        );
    }
}

export default Containers;