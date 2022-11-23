import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGkYOPLEpo0D3wTBziOXy3P3C2-djMbSA",
    authDomain: "blueberryteam-db93f.firebaseapp.com",
    databaseURL: "https://blueberryteam-db93f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "blueberryteam-db93f",
    storageBucket: "blueberryteam-db93f.appspot.com",
    messagingSenderId: "91368993912",
    appId: "1:91368993912:web:cbd537cb3d0104346f298d",
    measurementId: "G-XPEZL46RQP"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }