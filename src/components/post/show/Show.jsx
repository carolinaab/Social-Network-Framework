

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


    render() {
        const { post } = this.state;


        return (
            post && post !== undefined ? post.map((el) =>

                <div className="card" key={el.id}>
                    <div className="col-md-4">
                        <img src={fotoAlyab} className="card-img" alt="alyab" />
                        <h5 className="card-title">Alyab </h5>
                    </div>
                    <div className="card-body">
                        <small class="text-muted">Last updated 3 mins ago</small>
                        <h6 className="card-title" style={{ color: 'black' }}>Salud</h6>
                        <p className="card-text" style={{ color: 'black' }}>{el.data}</p>
                    </div>


                    <div className="show-body-button">


                        <div className="show-remove">
                            <button onClick={() => this.deletePost(el.id)}>Borrar</button>
                        </div>
                    </div>


                </div>) : <div></div>



        )
    }
}

export default Show;

