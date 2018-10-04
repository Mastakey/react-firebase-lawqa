import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDVEgjOsgdUp3pfOQhYisP4of5FJ2qTBQs",
    authDomain: "law-q-project.firebaseapp.com",
    databaseURL: "https://law-q-project.firebaseio.com",
    projectId: "law-q-project",
    storageBucket: "law-q-project.appspot.com",
    messagingSenderId: "17021257816"
};
firebase.initializeApp(config);
firebase.firestore().settings({
    timestampsInSnapshots: true
});

export const firestore = firebase.firestore();
export default firebase;