import React, { Component, Fragment } from 'react';
import Navbar from '../../components/specific/navbar/Navbar'
import UploadImage from '../../components/specific/uploadImage/UploadImage'
import ShowUser from '../../components/specific/showUser/ShowUser'
import './Profile.css'




class Profile extends Component {

    render() {
        return (
            <Fragment>
                <Navbar />
                <UploadImage />
                <ShowUser />
            </Fragment>
        );
    }
}


export default Profile