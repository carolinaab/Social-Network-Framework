import React, { Component } from 'react';
import Img from '../../../../img/plan-muro.jpg'
import './Primary.css'


class Containers extends Component {

    render() {
        return (
            <main className='container-main'>
                <div className='container-post'>

                </div>
                <div className='container-img'>
                    <img src={Img} alt="plan" className="plan-img" />
                </div>
            </main>

        );
    }
}

export default Containers;