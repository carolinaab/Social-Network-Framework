

import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import { db } from '../../../firebase/index';
import './Show.css';


class Show extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            post: [],
            image: '',
            imgeUrl: '',
            title: '',
            date: '',


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




    componentDidMount() {
        this._isMounted = true;

        db.collection("post").orderBy("date", "desc").onSnapshot((snapShot) => {
            if (this._isMounted) {
                this.setState({
                    post: snapShot.docs.map(doc => {
                        return {
                            id: doc.id,
                            data: doc.data().coment,
                            image: doc.data().image,
                            name: doc.data().name,
                            date: doc.data().date,
                            userName: doc.data().userName,
                            email: doc.data().email,
                            photoURL: doc.data().photoURL,
                        }

                    })

                })
            }

        })

    }

    componentWillUnmount() {
        this._isMounted = false;
    }


    deletePost = (id) => {
        db.collection("post").doc(id).delete()
            .then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
    }

    getTodo = (id) => {
        let docRef = db.collection('post').doc(id);
        docRef.get().then((doc) => {
            if (doc.exists) {
                this.setState({

                })
            }
        })
    }







    render() {
        const { post, image } = this.state;

        return (
            post && post !== undefined ? post.map((el) =>
                <div className="card mb-3" key={el.id}>
                    <div className="mb-4">
                        <img src={el.photoURL || require("../../../img/avatar.png")} alt="user" className="img-user" />
                        <p>{el.userName || el.email}</p>
                    </div>
                    <p className="card-text"><small className="text-muted">{el.date}</small></p>

                    {
                        image !== el.image
                            ?
                            < img src={el.image} className="card-img-top" alt="" />
                            :
                            <div></div>
                    }
                    <div className="card-body">
                        <h5 className="card-title">{el.name}</h5>
                        <p className="card-text" style={{ color: 'black' }}>{el.data}</p>

                    </div>


                    <div className="show-body-button">


                        <div className="show-remove">
                            <button onClick={() => this.deletePost(el.id)}><i className="material-icons">delete_outline</i></button>
                            <button onClick={() => this.getTodo(el.id)}></button>
                        </div>
                    </div>


                </div>) : <div></div>



        )
    }
}

export default Show;

