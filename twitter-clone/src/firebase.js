import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpMjj8IsW_tjw1ZiULw2nM0iOuV5luZLo",
    authDomain: "twitter-clone-ca46c.firebaseapp.com",
    databaseURL: "https://twitter-clone-ca46c-default-rtdb.firebaseio.com",
    projectId: "twitter-clone-ca46c",
    storageBucket: "twitter-clone-ca46c.appspot.com",
    messagingSenderId: "794363960096",
    appId: "1:794363960096:web:8d1a9095331844c5701545",
    measurementId: "G-NE5WZGJ85K"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  
  export default db;
  


