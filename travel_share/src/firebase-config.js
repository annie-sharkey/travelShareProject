import * as firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyAOwlak6ttE_-auODueYm813lVblmgAl2Q",
  authDomain: "travelshare-f457b.firebaseapp.com",
  databaseURL: "https://travelshare-f457b.firebaseio.com",
  projectId: "travelshare-f457b",
  storageBucket: "travelshare-f457b.appspot.com",
  messagingSenderId: "1006319289975"
};

export const travelShareApp = firebase.initializeApp(firebaseConfig);
