import React, {createContext} from "react";
// import { firebase } from "./";

// taken from bcbrian react and firebase template
export const AUTHENTICATING = "AUTHENTICATING";
export const UserContext = React.createContext(AUTHENTICATING);

export function emailAndPasswordSignUp(email, password){
    // firebase
    // .auth()
    // .createUserWithEmailAndPassword(email, password)
    // .catch(function(error) {
    //   // Handle Errors here.
    //   // const errorCode = error.code;
    //   // const errorMessage = error.message;
    //   // ...
    // });
}

export function emailAndPasswordSignIn(email, password) {
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .catch(function(error) {
    //     // Handle Errors here.
    //     // const errorCode = error.code;
    //     // const errorMessage = error.message;
    //     // ...
    //   });
}

export function signOut() {
// firebase
//     .auth()
//     .signOut()
//     .then(function() {
//     // Sign-out successful.
//     console.log("signed out!");
//     })
//     .catch(function(error) {
//     // An error happened.
//     });
}

export function onAuthStateChanged(cb) {
    // return firebase.auth().onAuthStateChanged(function(user) {
    //   console.log("YIKES!", user);
    //   cb && typeof cb === "function" && cb(user);
    // });
}