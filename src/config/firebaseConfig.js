import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyC5Y7hW0YrcVSvxDN-Ce7V8Ve4SZ4ORn5I",
    authDomain: "survive-the-grid.firebaseapp.com",
    databaseURL: "https://survive-the-grid.firebaseio.com",
    projectId: "survive-the-grid",
    storageBucket: "survive-the-grid.appspot.com",
    messagingSenderId: "112307172689",
    appId: "1:112307172689:web:e558851df03c6178108f70",
    measurementId: "G-SHLPD2E97Q"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;