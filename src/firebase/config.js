import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBWpjpW5jerrtTLqyk8aPprAO9sotX0ftw",
  authDomain: "photogallery-722b4.firebaseapp.com",
  projectId: "photogallery-722b4",
  storageBucket: "photogallery-722b4.appspot.com",
  messagingSenderId: "21032559331",
  appId: "1:21032559331:web:66b12d66fcbc6a9374dbd6",
  measurementId: "G-3JF58RLL0N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage,timestamp };