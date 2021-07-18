import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyA8x6lPTrTnnnseYfHUaaMmKgajc1fLhUU",
    authDomain: "auth-bdcbb.firebaseapp.com",
    projectId: "auth-bdcbb",
    storageBucket: "auth-bdcbb.appspot.com",
    messagingSenderId: "524124573036",
    appId: "1:524124573036:web:6115d54410e674ccf2f749"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const db =firebase.firestore();
const auth = firebase.auth();

export {auth};
export default db;