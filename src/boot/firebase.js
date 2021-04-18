import firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

// ADD YOUR FIREBASE CONFIG OBJECT HERE:
var firebaseConfig = {
  apiKey: "AIzaSyBfoo9cDrBLPP9-f0LAGhBIZUS9Wt-KdHY",
  authDomain: "maverick-d5d7c.firebaseapp.com",
  databaseURL: "https://maverick-d5d7c-default-rtdb.firebaseio.com",
  projectId: "maverick-d5d7c",
  storageBucket: "maverick-d5d7c.appspot.com",
  messagingSenderId: "281795167759",
  appId: "1:281795167759:web:dfcd42e1b662366d1ac57a"

}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
