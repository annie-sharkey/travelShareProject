import * as firebase from "firebase";
import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Template from './Template';
import Resources from './Resources';
import Header from './Header';

var config = {
  apiKey: "AIzaSyDrLAr6U0jNQoLj50jhRid9PyOu5flf2tw",
  authDomain: "static-grid-168100.firebaseapp.com",
  databaseURL: "https://static-grid-168100.firebaseio.com",
  storageBucket: "static-grid-168100.appspot.com",
};
firebase.initializeApp(config);

var provider = new firebase.auth.GoogleAuthProvider();


class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
          logInState: this.props.logInState
        }
  }     
  
  handleLogInButton() {
    firebase.auth().signInWithPopup(provider).then((result) => {
      this.setState({
        username: result.user.displayName,
        emailVerified: result.user.emailVerified
      })
    // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
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

  }

  render() {
    console.log(this.props.children);
    return (
     
    <Router>
      <div>
        <Route path="/" component={() => (<Header username={this.state.username} emailVerified={this.state.emailVerified} />)}/>
        <Route path="/template" component={Template} />
        <Route path="/resources" component={Resources}/>
        <Header onLogIn={() => this.handleLogInButton(child)} />
      </div>
    </Router>

    );
  }
}

export default App;




