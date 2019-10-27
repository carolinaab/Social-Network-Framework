import firebaseApp from 'firebase/app';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyC7FSK03JcEV7HtO20cXB03ncK_afcfSc4",
    apiKey: "AIzaSyAK0qCeUP-wkzxRLnTL-y1U8L9eybG6Th4",
    authDomain: "fitclubframework.firebaseapp.com",
    databaseURL: "https://fitclubframework.firebaseio.com",
    projectId: "fitclubframework",
    storageBucket: "fitclubframework.appspot.com",
    messagingSenderId: "535931623310",
    appId: "1:535931623310:web:62005d2174aaaaaae9f6df",
    measurementId: "G-6JMV2X8064"
}

const createFirebaseApp = () => {
    firebaseApp.initializeApp(config)
    firebaseApp.auth().onAuthStateChanged(user => {
        if (user) {
            console.log('User connected')

        } else {
            console.log('No user connected')
        }
    })
    return firebaseApp
}


export default createFirebaseApp