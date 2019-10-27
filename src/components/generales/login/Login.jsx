import React, { Component, Fragment } from 'react';
import * as React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import withFirebaseAuth, { WrappedComponentProps } from 'react-with-firebase-auth';
import firebaseconfig from '../../../firebase';


const firebaseApp = firebase.initializeApp(firebaseconfig);

class Login extends Component {


    render() {

        const App = ({
            signInWithEmailAndPassword,
            createUserWithEmailAndPassword,
            signInWithGoogle,
            signInWithFacebook,
            user,
            signOut,
            signOut,
            setError,
            user,
            error,

        }: WrappedComponentProps) => (
                <Fragment>
                    user
                    ? <h1>Hello, {user.displayName}</h1>
                    : <h1>Log in</h1>
                    }

    {
                        user
                            ? <button onClick={signOut}>Sign out</button>
                            : <button onClick={signInWithGoogle}>Sign in with Google</button>
                    }
                </Fragment>
        
        return (

            <div>


            </div>
        );
    }
}

const firebaseAppAuth = firebaseApp.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export default withFirebaseAuth({
    provider,
    firebaseAppAuth,
})(Login);

// export default connect()(Login);




