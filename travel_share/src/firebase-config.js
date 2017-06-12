import * as firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyAcJTO8hgQaKCMJ4HpBhNF5stS_q7aC5mU",
  authDomain: "travelshareproject.firebaseapp.com",
  databaseURL: "https://travelshareproject.firebaseio.com",
  projectId: "travelshareproject",
  storageBucket: "travelshareproject.appspot.com",
  messagingSenderId: "595093146012"
};

export const travelShareApp = firebase.initializeApp(firebaseConfig);
