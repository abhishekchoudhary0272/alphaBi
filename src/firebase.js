// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBl5_UAdx-X9dgIfQ2eMyabuylBwa0G-o",
  authDomain: "alphabi-c6185.firebaseapp.com",
  projectId: "alphabi-c6185",
  storageBucket: "alphabi-c6185.appspot.com",
  messagingSenderId: "166725851923",
  appId: "1:166725851923:web:2dbd753e5a2005354718e6"

};


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// export default {app, auth};

export default firebase;
