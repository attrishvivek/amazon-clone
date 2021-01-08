import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0J1zBlfgez3L4B6EskQ08XLVD4FJAvEk",
  authDomain: "challenge-bb6ef.firebaseapp.com",
  projectId: "challenge-bb6ef",
  storageBucket: "challenge-bb6ef.appspot.com",
  messagingSenderId: "1034635075908",
  appId: "1:1034635075908:web:47b92a9daf07b87e0af711",
  measurementId: "G-5SV4Q4ZM63"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };