import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCWsJOL1dCA2Tshk_KMIqgJaycYg36sZHE",
    authDomain: "twitter-clone-2f64c.firebaseapp.com",
    databaseURL: "https://twitter-clone-2f64c-default-rtdb.firebaseio.com",
    projectId: "twitter-clone-2f64c",
    storageBucket: "twitter-clone-2f64c.appspot.com",
    messagingSenderId: "240609855463",
    appId: "1:240609855463:web:f6beb8a9d124fbe25cdf42",
    measurementId: "G-F27CZE8T78"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;