

import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import { db } from '../../../firebase/index';
import MenuPost from '../../post/menuPost/MenuPost';
import FileUploader from 'react-firebase-file-uploader';

import './Show.css'

let user = firebase.auth().currentUser;


class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            image: '',
            imgeUrl: '',
            title: '',
            date: '',
            openMenu: false,
        };
    }
    handleUpload = filename => {

        this.setState({
            image: filename,
        })
        firebase.storage().ref('photo').child(filename).getDownloadURL().then(url => this.setState({
            imageURL: url
        }))
    }


    componentWillMount() {

        db.collection("post").onSnapshot((snapShot) => {
            this.setState({
                post: snapShot.docs.map(doc => {
                    return {
                        id: doc.id,
                        data: doc.data().coment,
                        image: doc.data().image,
                        name: doc.data().name,
                        date: doc.data().date
                    }

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




    render() {
        const { post, image } = this.state;


        return (
            post && post !== undefined ? post.map((el) =>
                <div className="card mb-3" key={el.id}>
                    {
                        image !== el.image
                            ?

                            < img src={el.image} className="card-img-top" alt="" />

                            :
                            <div></div>
                    }

                    <div className="card-body">
                        <p className="card-text"><small className="text-muted">{el.date}</small></p>
                        <h5 className="card-title">{el.name}</h5>
                        <p className="card-text" style={{ color: 'black' }}>{el.data}</p>

                    </div>


                    <div className="show-body-button">


                        <div className="show-remove">
                            <button onClick={() => this.deletePost(el.id)}><i className="material-icons">delete_outline</i></button>
                        </div>
                    </div>


                </div>) : <div></div>



        )
    }
}

export default Show;

