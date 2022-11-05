import {initializeApp} from'firebase/app';
import {getFirestore} from'firebase/firestore';
import {getAuth,GoogleAuthProvider} from'firebase/auth';
import {getStorage} from 'firebase/storage'

// import "firebase/auth";
// import "firebase/storage";
// import "firebase/firestorage";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBunqoQCZXFG3ulsG2kcWpVlQ_NQvAqYtQ",
  authDomain: "linkedin-45796.firebaseapp.com",
  projectId: "linkedin-45796",
  storageBucket: "linkedin-45796.appspot.com",
  messagingSenderId: "588640357606",
  appId: "1:588640357606:web:6a4c6ff06118533817bf27",
  measurementId: "G-SY5T79RG8S",
});

// const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
const auth = getAuth(0)
const provider = new GoogleAuthProvider();
const storage = getStorage();
export { auth, provider, storage };
export default db;
