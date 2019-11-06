import React, { Component } from 'react';
import Img from '../../../../img/plan-muro.jpg';
import Post from '../../../post/create/Create';
import Show from '../../../post/show/Show';

import './Primary.css'


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
                    <img src={Img} alt="plan" className="plan-img" />
                </div>
            </main>

        );
    }
}

export default Containers;