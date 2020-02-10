import { useState, useEffect } from "react";
import { isEqual } from "lodash";
import { firebase } from "./";
export const db = firebase.firestore();

/*
add
-- doc +
-- endAt =
-- endBefore =
-- get $
isEqual
-- limit =
-- onSnapshot $
-- orderBy =
-- startAfter =
-- startAt =
-- where =

CCCCCCCCC

-- update
-- set
*/

// Additional comments added by SirPotatoIV while trying to figure out this code. added initials SP

// SP - looks like we are making a custom hook.
export function useFirestore(collection, isRealTime = true, newOpts = {}) {
  // SP - checking if isRealTime has a boolean value? If it doesn't set it to true
  if (typeof isRealTime !== "boolean") {
    newOpts = isRealTime;
    isRealTime = true;
  }
  // SP - setting up a state value for document snapshots, which I assume means the values of the document ( like a row in a table)
  const [documentSnapshots, setData] = useState([]);
  // SP - setting up a state value that stores references to collections, which are kind of like tables in a database
  const [collectionRef, setCollectionRef] = useState(null);

  // SP - not sure what opts are ??????
  const [opts, setOpts] = useState(newOpts);
  
  // SP - unsure what this does ... ???????
  // SP -- appears to run every time newOpts and opts are updated
  // We are controlling equality!
  useEffect(() => {
    if (!isEqual(newOpts, opts)) {
      setOpts(newOpts);
    }
  }, [newOpts, opts]);

  // SP - appears to run whenever collection, isRealTime, opts is changed.
  useEffect(() => {
    // SP - adds the collection onto the db variable. db is equal to firebase.firebasestore().
    // SP -- reads very similar to using sequelize or mongoose
    let dbRef = db.collection(collection);
    // SP - sets the collection ref to the dbRef we have created.
    setCollectionRef(dbRef);
    // SP - gets the key/property names from the object opts, which is probaly an array and sets them equal to a variable.
    const methods = Object.keys(opts);

    // SP - checking to make sure that the array has a value "doc" and there are more than 1 key/property name in the array from opts
    if (methods.includes("doc") && methods.length > 1) {
      throw new Error(
        "Look at the docs here things dont work this way. Once you choose a doc you can only do these methods. \n" +
          "https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentReference.html"
      );
    }

    // SP - taking the values of properties/keys in opts (which I'm assuming are methods) and storing them in new key/properties of dbRef
    for (let i = 0; i < methods.length; i++) {
      // SP - takes one of the indice from methods and sets it equal to method (these were originally keys from the object opts)
      const method = methods[i];
      // SP - uses the method (which is a key from opts) to get the value from the object opts and sets it equal to args
      let args = opts[method];
      // SP - checks to see if the value of opts[method] is an array
      if (Array.isArray(args[0])) {
        // SP - loops through the array taken from opts[method]
        // SP -- adds a new property/key to dbRef with the name of method and sets the value of that new property/key to args
        for (let j = 0; j < args.length; j++) {
          const innerArgs = Array.isArray(args[j]) ? args[j] : [args[j]];

          dbRef = dbRef[method](...innerArgs);
        }
      // SP - if the value of opts[method] is NOT an array
      // SP -- adds a new property/key to dbRef with the name of method and sets the value of that new property/key to args
      } else {
        args = Array.isArray(args) ? args : [args];

        dbRef = dbRef[method](...args);
      }
    }

    let cleanup = () => {};
    
    // SP - runs if isRealTime is false ... need to figure out what sets isRealTime ?????
    if (!isRealTime) {
      // SP - appears to be doing a get from the database
      // SP -- geting snapshots of all the documents in the database and setting the state of data.
      dbRef.get().then(function(querySnapshot) {
        if (!querySnapshot.forEach) {
          setData([querySnapshot]);
        } else {
          const documentSnapshots = [];
          querySnapshot.forEach(function(doc) {
            documentSnapshots.push(doc);
          });
          setData(documentSnapshots);
        }
      });
    } else {
      cleanup = dbRef.onSnapshot(function(querySnapshot) {
        if (!querySnapshot.forEach) {
          setData([querySnapshot]);
        } else {
          const documentSnapshots = [];
          querySnapshot.forEach(function(doc) {
            documentSnapshots.push(doc);
          });
          setData(documentSnapshots);
        }
      });
    }
    return cleanup;
  }, [collection, isRealTime, opts]);
  return {
    documentSnapshots,
    collectionRef
  };
}

// function Component() {
//   const {
//     documentSnapshots,
//     ref,
//   } = useFirestore("users");
//   return <div>{documentSnapshots.map(d => <div>{d.data()}</div>)}</div>
// }
