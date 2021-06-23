import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqL0_zA03wOabKwHETiPlteRlVqEi2pCc",
  authDomain: "linkedin-clone2-66961.firebaseapp.com",
  projectId: "linkedin-clone2-66961",
  storageBucket: "linkedin-clone2-66961.appspot.com",
  messagingSenderId: "3287451025",
  appId: "1:3287451025:web:63a13c38975dea85f50630",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
