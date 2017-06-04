
import * as firebase from 'firebase';

export const firebaseConfig = {
    apiKey: "AIzaSyDDkA6ZBJjycBwqtRi0zcpfiFaSKDBpQdQ",
    authDomain: "travelplanner-6d725.firebaseapp.com",
    databaseURL: "https://travelplanner-6d725.firebaseio.com",
    projectId: "travelplanner-6d725",
    storageBucket: "travelplanner-6d725.appspot.com",
};

export const travelShareApp = firebase.initializeApp(firebaseConfig);
