import * as firebase from "firebase";
// import FirebaseAuth from 'react-firebase-auth'
import React, { Component } from 'react';
import Header from './Header';


// Initialize Firebase

var config = {
  apiKey: "AIzaSyDrLAr6U0jNQoLj50jhRid9PyOu5flf2tw",
  authDomain: "static-grid-168100.firebaseapp.com",
  databaseURL: "https://static-grid-168100.firebaseio.com",
  storageBucket: "static-grid-168100.appspot.com",
};
firebase.initializeApp(config);

var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(user);
  console.log(user.displayName);
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});


export default LogIn; 

//export default class Authentication extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state= {
  //     loggedIn: false,
  //   }
  // }
  // handleLogIn = () => {
  //     this.setState({
  //       loggedIn: !loggedIn
  //     }
  //     )
  // }

  /*render() {
    return (
      <div>
        <FirebaseAuth
          twitter
          github
          email
          google={{ scopes: ['https://www.googleapis.com/auth/plus.login'] }}
          facebook={{ scopes: [ 'public_profile', 'email', 'user_likes', 'user_friends' ] }}
          // 
          tosUrl='https://www.google.com'
          apiKey='AIzaSyDrLAr6U0jNQoLj50jhRid9PyOu5flf2tw'
          authDomain='static-grid-168100.firebaseapp.com'
          databaseURL='https://static-grid-168100.firebaseio.com'
          storageBucket='static-grid-168100.appspot.com'
          // 
          onAuthStateChanged={user => {
            console.log(user.displayName)
          }}
          />
      </div>
    );
  }*/
// }


