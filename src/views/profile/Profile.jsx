import React, { Component, Fragment } from 'react';
import { firebaseApp } from '../../firebase/index';
import Navbar from '../../components/specific/navbar/Navbar'
import UploadImage from '../../components/uploadImage/UploadImage'





class Profile extends Component {

    render() {
        return (
            <Fragment>
                <Navbar />
                <UploadImage />
            </Fragment>
        );
    }
}


export default Profile