

import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import { db } from '../../../../firebase/index';
import fotoAlyab from '../../../img/alyab.jpg';
import MenuPost from '../../../post/menuPost/MenuPost';
import './Show.css'

let user = firebase.auth().currentUser;
console.log(user);

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            edit: '',
            // newPost: '',
            menu: false,
        };
    }

    componentDidMount() {

        db.collection('post').onSnapshot((snapShot) => {

            this.setState({

                post: snapShot.docs.map(doc => {

                    return { id: doc.id, data: doc.data().post }
                })
            })
        })
    }


    deletePost = (id) => {
        db.collection('post').doc(id).delete()
            .then(() => {
                console.log('Document successfully deleted!');
            }).catch((error) => {
                console.error('Error removing document: ', error);
            });
    }

    // handleNewPostChange = (e) => {
    //     this.setState({
    //         newPost: e.target.value
    //     })
    // }
    handleClickArrowMenu = (e) => {
        this.setState({ menu: this.state.menu })
    }



    render() {
        const { post } = this.state;
        // const { edit } = this.state;
        // const { newPost } = this.state;

        return (
            post && post !== undefined ? post.map((el) =>
                <div className='card mb-3' style={{ maxWidth: '540px' }} key={el.id}>

                    <MenuPost />
                    <div className='row no-gutters'>
                        <div className='col-md-4'>
                            <img src={fotoAlyab} className='card-img' alt='alyab' />
                        </div>
                        <div className='col-md-8'>
                            <div className='card-body'>
                                <h5 className='card-title'>Alyab</h5>
                                <h6 className='card-title' style={{ color: 'black' }}>Salud</h6>
                                <p className='card-text' style={{ color: 'black' }}>{el.data}</p>
                                <p className='card-text'>Last updated 3 mins ago</p>

                            </div>
                        </div>
                    </div>
                    <div className='show-body-button'>

                        <div className='show-remove'>
                            <button onClick={() => this.deletePost(el.id)}> <i className='material-icons'>delete_outline</i></button>
                        </div>
                    </div>

                </div >) : <div></div>



        )
    }
}
export default Show;