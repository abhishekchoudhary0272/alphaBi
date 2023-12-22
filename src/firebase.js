// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAznBk_8Xx_fHAkhbvsAZ7pG-Vkq10dUYg",
  authDomain: "alphabi-c7aaa.firebaseapp.com",
  projectId: "alphabi-c7aaa",
  storageBucket: "alphabi-c7aaa.appspot.com",
  messagingSenderId: "1099454230677",
  appId: "1:1099454230677:web:1c669649fd7cda0201ab9c",
  measurementId: "G-Q0L9V176WV"
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
