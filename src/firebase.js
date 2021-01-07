import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD9P0tSrozlJfjX2n_jE4r9qWGeyDFuQmA",
    authDomain: "clone-f0a0f.firebaseapp.com",
    projectId: "clone-f0a0f",
    storageBucket: "clone-f0a0f.appspot.com",
    messagingSenderId: "355189622233",
    appId: "1:355189622233:web:3246ddd6922cc4481f05c8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {db, auth, provider};

