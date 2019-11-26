import React, { Component } from 'react';
import Img from '../../../../img/plan-muro.jpg';
import Post from '../../../post/create/Create';
import Show from '../../../post/show/Show';

import './PostContainer.css'


class Containers extends Component {

    render() {
        return (
            <main className='container-main'>
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