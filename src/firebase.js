// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByVO3By3fTiAOIC_6_bHrL85jHl94pcw8",
    authDomain: "instagram-clone-react-7f0c7.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-7f0c7-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-react-7f0c7",
    storageBucket: "instagram-clone-react-7f0c7.appspot.com",
    messagingSenderId: "66978407410",
    appId: "1:66978407410:web:c1e58acc85085567dbc16b",
    measurementId: "G-XWBV0Z58YC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

//   const storage = firebase.storage();

//   export default db;
  export { db, auth, provider }