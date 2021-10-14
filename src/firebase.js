import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXoyKEJmNMQ0UD5Ir5CqlADTiEQmHHYb8",
  authDomain: "twitter-clone-4dc3e.firebaseapp.com",
  projectId: "twitter-clone-4dc3e",
  storageBucket: "twitter-clone-4dc3e.appspot.com",
  messagingSenderId: "756307740072",
  appId: "1:756307740072:web:09e4b44df33e0922b7499d",
  measurementId: "G-D40J36Q7Z4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;