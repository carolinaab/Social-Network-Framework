import React, { Component } from 'react';
import { storage } from '../../firebase/index'
import './UploadImage.css'

class UploadImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
        };
    }
    handleInputChange = (e) => {
        if (e.target.files[0]) {
            const image = e.target.files[0]
            this.setState({ image })
        }
    }
    handleUpload = (e) => {
        const { image } = this.state
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {

            },
            (error) => {
                console.error(error)
            },
            () => {
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({ url });
                })
            })
    }


    render() {
        const style = {
            height: '50vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }
        return (
            <div onChange={this.handleInputChange}>
                <input type='file' />
                <button onClick={this.handleUpload}>upload</button>
                <br />
                <img
                    src={this.state.url || 'http://via.placeholder.com/200x200'}
                    alt='uploaded images'
                    className='image-profile' />

            </div>

        );
    }
}

export default UploadImage;