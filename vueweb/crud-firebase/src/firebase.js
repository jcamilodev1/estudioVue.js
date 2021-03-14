import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMz9lVI3fuPxGxeCbJzI2kDt7Jc_HkHWE",
  authDomain: "vue-crud-19226.firebaseapp.com",
  projectId: "vue-crud-19226",
  storageBucket: "vue-crud-19226.appspot.com",
  messagingSenderId: "251732711441",
  appId: "1:251732711441:web:3d619a2907a556b90bb9b0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
