import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApu-3_5ht7VT95qiIzePs9zOZUrS8DwFA",
  authDomain: "linkedin-clone-a685a.firebaseapp.com",
  projectId: "linkedin-clone-a685a",
  storageBucket: "linkedin-clone-a685a.appspot.com",
  messagingSenderId: "933740401467",
  appId: "1:933740401467:web:934af6aa0420fb43ca1d1e",
  measurementId: "G-8NPZFEXSTS"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;