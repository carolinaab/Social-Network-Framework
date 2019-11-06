

import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import { db } from '../../../firebase/index';
import fotoAlyab from '../../../img/alyab.jpg'
import './Show.css'

let user = firebase.auth().currentUser;
console.log(user);

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            edit: '',
            newPost: ''
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

    handleNewPostChange = (event) => {
        this.setState({
            newPost: event.target.value
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

                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src={fotoAlyab} class="card-img" alt="alyab" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Alyab</h5>
                                <h6 class="card-title" style={{ color: 'black' }}>Salud</h6>
                                <p className="card-text" style={{ color: 'black' }}>{el.data}</p>
                                <p className="card-text">Last updated 3 mins ago</p>


                            </div>
                        </div>
                    </div>
                    <div className="show-body-button">

                        <div className="show-remove">
                            <button onClick={() => this.deletePost(el.id)}>Borrar</button>
                        </div>
                    </div>

                </div >) : <div></div>



        )
    }
}

export default Show;

