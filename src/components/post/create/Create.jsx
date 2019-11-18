
import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import { db } from '../../../firebase/index';
import FileUploader from 'react-firebase-file-uploader';
import './Create.css'


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            imageURL: '',
            name: '',
            coment: '',
            allData: []
        };
    }

    handleUpload = filename => {
        console.log(filename)
        this.setState({ image: filename })
        firebase.storage().ref('photo').child(filename).getDownloadURL()
            .then(url => this.setState({
                imageURL: url
            }))



    }


    handleInputUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addPostData = (e) => {
        e.preventDefault();
        firebase.auth().onAuthStateChanged((user) => {
            let userName = user.displayName;
            let email = user.email;
            let photoURL = user.photoURL;
            db.collection('post').add({
                date: new Date().toString(),
                name: this.state.name,
                coment: this.state.coment,
                image: this.state.imageURL,
                userName: userName,
                email: email,
                photoURL: photoURL,
            })
            this.setState({
                name: '',
                coment: ''
            });
        })

    }
    render() {

        this.state.allData.map((element, i) => {
            var name = element.name
            var coment = element.coment
            return (
                <li key={i}>{name} ({coment})</li>
            )
        })

        return (



            <form onSubmit={this.addPostData} className='cotainer-form'>
                <input
                    type='text'
                    name='name'
                    placeholder='Titulo'
                    onChange={this.handleInputUpdate}
                    value={this.state.name}
                    className='text-header'
                />
                <br />
                <textarea
                    type='text'
                    name='coment'
                    placeholder='Post'
                    onChange={this.handleInputUpdate}
                    value={this.state.coment}
                    className='home-input'
                />


                <FileUploader
                    accept='image/*'
                    name='image'
                    storageRef={firebase.storage().ref('photo')}
                    onUploadSuccess={this.handleUpload}
                />
                <br />
                <button type='submit' className='btn btn-primary'>Publicar</button>


            </form>






        );
    }


}
export default Post;