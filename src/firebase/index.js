// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
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

export { firebase };
