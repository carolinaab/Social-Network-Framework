

import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import { db } from '../../../firebase/index';
import fotoAlyab from '../../../img/alyab.jpg'
import MenuPost from '../../post/menuPost/MenuPost';
import './Show.css'

let user = firebase.auth().currentUser;


class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            edit: '',
            image: '',
            imgeUrl: '',
            openMenu: false,
        };
    }

    componentDidMount() {
        db.collection("post").onSnapshot((snapShot) => {
            this.setState({
                post: snapShot.docs.map(doc => {
                    return { id: doc.id, data: doc.data().post }
                })
            })
        })
    }



    deletePost = (id) => {
        db.collection("post").doc(id).delete()
            .then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
    }

    handleNewPostChange = (e) => {
        this.setState({
            newPost: e.target.value
        })
    }
    handleClickMenuPost = (e) => {
        this.setState({ openMenu: !this.state.openMenu });
    }

    handleEditPost = (id) => {
        db.collection('post').doc(id).update({
            post: this.state.newPost
        })
    }

    editPost = (id) => {
        this.setState({
            edit: id
        })
    }

    render() {
        const { post } = this.state;
        const { edit } = this.state;
        const { newPost } = this.state;
        console.log(newPost)
        console.log(edit)
        return (
            post && post !== undefined ? post.map((el) =>
                <div className="card mb-3" style={{ maxWidth: '540px' }} key={el.id}>
                    <menu className='menu-post'>
                        <i
                            className="material-icons"
                            onClick={this.handleClickMenuPost}>
                            keyboard_arrow_down
                        </i>
                        {
                            this.state.openMenu &&
                            <MenuPost />
                        }
                    </menu>

                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={fotoAlyab} className="card-img" alt="alyab" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Alyab</h5>
                                {
                                    edit === el.id ? <input
                                        type='text'
                                        className='edit'
                                        value={newPost}
                                        onChange={this.handleNewPostChange} />
                                        : <p>{el.data}</p>
                                }
                                <h6 className="card-title" style={{ color: 'black' }}>Salud</h6>
                                <p className="card-text" style={{ color: 'black' }}>{el.data}</p>
                                <p className="card-text">Last updated 3 mins ago</p>


                            </div>
                        </div>
                    </div>
                    <div className="show-body-button">
                        <div className="wall-edit">
                            {edit === el.id ? <button onClick={() => this.handleEditPost(el.id)}>editar</button> : <button className="wall-edit-button" onClick={() => this.editPost(el.id)}><i className="fas fa-edit"></i></button>}

                        </div>

                        <div className="show-remove">
                            <button onClick={() => this.deletePost(el.id)}>Borrar</button>
                        </div>
                    </div>

                </div >) : <div></div>



        )
    }
}

export default Show;

