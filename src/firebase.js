import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBunqoQCZXFG3ulsG2kcWpVlQ_NQvAqYtQ",
    authDomain: "linkedin-45796.firebaseapp.com",
    projectId: "linkedin-45796",
    storageBucket: "linkedin-45796.appspot.com",
    messagingSenderId: "588640357606",
    appId: "1:588640357606:web:6a4c6ff06118533817bf27",
    measurementId: "G-SY5T79RG8S"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  export {auth,provider,storage};
  export default db;