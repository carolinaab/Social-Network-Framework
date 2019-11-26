
import React, { Component } from 'react';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';

class ProfilePage extends Component {
    state = {
        username: '',
        avatar: '',
        isUploading: false,
        progress: 0,
        avatarURL: '',
        alert: '',
        error: ''
    };

    handleChangeUsername = event =>
        this.setState({ username: event.target.value });
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };
    handleUploadSuccess = filename => {
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        firebase
            .storage()
            .ref('images')
            .child(filename)
            .getDownloadURL()
            .then(url => this.setState({ avatarURL: url }));
    };
    addNewData = (e) => {
        e.preventDefault();
        let user = firebase.auth().currentUser;
        console.log(user)
        user.updateProfile({
            displayName: this.state.username,
            photoURL: this.state.avatarURL
        }).then(() => {
            this.setState({ alert: 'Se actualizó tu perfil' })

        }).catch(() => {
            this.setState({ error: 'Algo salio mal, Vuelve a intentarlo' })
        });

    }



    render() {
        return (

            <div>
                <form onSubmit={this.addNewData} >
                    <label>Username:</label>
                    <input
                        type='text'
                        value={this.state.username}
                        name='username'
                        onChange={this.handleChangeUsername}
                    />
                    <label>Avatar:</label>
                    {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                    {this.state.avatarURL && <img src={this.state.avatarURL} alt='avatar' />}
                    <FileUploader
                        accept='image/*'
                        name='avatar'
                        randomizeFilename
                        storageRef={firebase.storage().ref('images')}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress}
                    />
                    <button type='submit' className='btn btn-primary'>Publicar</button>
                    {this.addNewData
                        ?
                        <p style={{ color: 'green', marginTop: '1rem', marginLeft: '1rem' }}>{this.state.alert}</p>
                        :
                        <p style={{ color: 'red', marginTop: '1rem', marginLeft: '1rem' }}>{this.state.error}</p>
                    }
                </form>
            </div>

        );
    }
}

export default ProfilePage;