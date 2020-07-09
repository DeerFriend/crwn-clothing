import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD35uZVwo-p5wh4KxTs-Bon7lEzBAHJffU",
    authDomain: "crwn-db-b15ba.firebaseapp.com",
    databaseURL: "https://crwn-db-b15ba.firebaseio.com",
    projectId: "crwn-db-b15ba",
    storageBucket: "crwn-db-b15ba.appspot.com",
    messagingSenderId: "228107118531",
    appId: "1:228107118531:web:fde4cd9cd422e4d9fc7f76",
    measurementId: "G-ZY682BJ5FJ"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth(); 
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;