
import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import { db } from '../../../firebase/index';
import './Create.css'

class Post extends Component {

    constructor(props) {

        super(props);
        this.state = {
            post: '',
        }
    }

    handlePostChange = (e) => {

        this.setState({ [e.target.name]: e.target.value });

    }

    cleanTextarea = () => {
        this.setState('')
    }
    handleSubmit = e => {
        e.preventDefault();
        let { post } = this.state;
        let user = firebase.auth().currentUser;
        console.log(user)
        let uid = user.email;

        db.collection('post').add({
            uid: uid,
            post: post,
        })
            .then(docRef => {
                console.log(post);
                console.log(docRef.id);
            })
            .catch(error => {
                console.error('Error adding document: ', error);
            });



    }


    render() {
        return (
            <div className='home-body' >

                <form className="home-form" onSubmit={this.handleSubmit}>
                    <div className="home-post">
                        <textarea type="text"
                            className="home-input"
                            placeholder="Escribe tu post"
                            value={this.state.post}
                            name='post'
                            onChange={this.handlePostChange}></textarea>
                    </div>

                    <div className="home-body-button">
                        <input type="submit" className="home-button" id="sendpost" value="Publicar" />
                    </div>

                </form>

            </div>

        )

    }
}

export default Post;