
import * as firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyDrLAr6U0jNQoLj50jhRid9PyOu5flf2tw",
  authDomain: "static-grid-168100.firebaseapp.com",
  databaseURL: "https://static-grid-168100.firebaseio.com",
  storageBucket: "static-grid-168100.appspot.com",
};

export const travelShareApp = firebase.initializeApp(firebaseConfig);