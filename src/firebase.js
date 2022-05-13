// import { initializeApp } from "firebase/app";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJvMn5zNeHUnYabK_uLjrFDH63pRZcr3w",
  authDomain: "twitter-clone-3e911.firebaseapp.com",
  projectId: "twitter-clone-3e911",
  storageBucket: "twitter-clone-3e911.appspot.com",
  messagingSenderId: "687269804192",
  appId: "1:687269804192:web:a01614e7c0deb63515f1c5",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

export default db;
