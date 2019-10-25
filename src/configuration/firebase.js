import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAK0qCeUP-wkzxRLnTL-y1U8L9eybG6Th4",
    authDomain: "fitclubframework.firebaseapp.com",
    databaseURL: "https://fitclubframework.firebaseio.com",
    projectId: "fitclubframework",
    storageBucket: "fitclubframework.appspot.com",
    messagingSenderId: "535931623310",
    appId: "1:535931623310:web:62005d2174aaaaaae9f6df",
    measurementId: "G-6JMV2X8064"

});


const db = firebaseApp.firestore();

export { db };