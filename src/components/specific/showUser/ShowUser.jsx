import React, { Component } from 'react';
import firebase from "firebase";


let user = firebase.auth().currentUser;


class ShowUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            avatar: "",

        };
    }
    handleUploadImage = filename => {

        this.setState({
            image: filename,
        })
        firebase.storage().ref('image').child(filename).getDownloadURL().then(url => this.setState({
            imageURL: url
        }))
    }





    // updateDataName = () => {
    //     firebase.auth().onAuthStateChanged((user) => {
    //         if (user) {
    //             // User is signed in.
    //             console.log(user);
    //             var displayName = user.displayName;
    //             console.log(displayName);
    //             var email = user.email;
    //             console.log(email);
    //             var emailVerified = user.emailVerified;
    //             console.log(emailVerified);
    //             var photoURL = user.photoURL;
    //             console.log(photoURL);
    //             var isAnonymous = user.isAnonymous;
    //             console.log(isAnonymous);
    //             var uid = user.uid;
    //             console.log(uid);
    //             var providerData = user.providerData;
    //             console.log(providerData);
    //             // ...

    //         }
    //         // if (user != null) {
    //         //     this.setState({
    //         //         userName: user.displayName,
    //         //         avatar: user.email
    //         //     })
    //         //     // The user's ID, unique to the Firebase project. Do NOT use
    //         //     // this value to authenticate with your backend server, if
    //         //     // you have one. Use User.getToken() instead.
    //     })

    // }



    //     db.collection("post").onSnapshot((snapShot) => {
    //         this.setState({
    //             post: snapShot.docs.map(doc => {
    //                 return {
    //                     id: doc.id,
    //                     data: doc.data().coment,
    //                     image: doc.data().image,
    //                     name: doc.data().name,
    //                     date: doc.data().date
    //                 }

    //             })

    //         })

    //     })


    render() {


        return (
            // post && post !== undefined ? post.map((el) =>
            //     <div className="card mb-3" key={el.id}>
            //         {
            //             image !== el.image
            //                 ?

            //                 < img src={el.image} className="card-img-top" alt="" />

            //                 :
            //                 <div></div>
            //         }

            //         <div className="card-body">
            //             <p className="card-text"><small className="text-muted">{el.date}</small></p>
            //             <h5 className="card-title">{el.name}</h5>
            //             <p className="card-text" style={{ color: 'black' }}>{el.data}</p>

            //         </div>


            //         <div className="show-body-button">


            //             <div className="show-remove">
            //                 <button onClick={() => this.deletePost(el.id)}><i className="material-icons">delete_outline</i></button>
            //             </div>
            //         </div>


            //     </div>) : <div></div>

            // <div>{this.updateDataName()}</div >
            <div></div>
        )
    }
}
export default ShowUser;
