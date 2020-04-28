import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB72-DlvUUXfogtelD8zOtNnRgGs0lH3RE",
  authDomain: "healthub-8762a.firebaseapp.com",
  databaseURL: "https://healthub-8762a.firebaseio.com",
  projectId: "healthub-8762a",
  storageBucket: "healthub-8762a.appspot.com",
  messagingSenderId: "355172711563",
  appId: "1:355172711563:web:df7e232e795cbcc7ce288e",
  measurementId: "G-KBJC0WYG6K"
};
// Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// export const firestore = firebaseApp.firestore()
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});
// firebase.analytics();

export default firebase;
