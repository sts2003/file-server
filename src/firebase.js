const firebase = require("firebase");
require("firebase/firestore");

const fsConfig = {
  apiKey: "AIzaSyDzdg2G1p8aHAj52i3PtK0bR_QMt5BfUxQ",
  authDomain: "fire-memo-8c00a.firebaseapp.com",
  databaseURL: "https://fire-memo-8c00a.firebaseio.com",
  projectId: "fire-memo-8c00a",
  storageBucket: "fire-memo-8c00a.appspot.com",
  messagingSenderId: "624005316715",
  appId: "1:624005316715:web:39e6a4c685fb3840f9b12e",
  measurementId: "G-X1BBHC7HMY",
};
// Initialize Firebase
firebase.initializeApp(fsConfig);

const firestore = new firebase.firestore();

module.exports = firestore;
