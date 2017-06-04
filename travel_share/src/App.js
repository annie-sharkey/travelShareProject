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
import {travelShareApp} from "./firebase-config";


var provider = new firebase.auth.GoogleAuthProvider();


class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
          logInState: true
        }
  }     
  // componentDidMount() {
  //   window.location.reload(true);
  // }
  handleLogInButton(logInState) {
    if(this.state.logInState) {
        firebase.auth().signInWithPopup(provider).then((result) => {
        this.setState({
          username: result.user.displayName,
          emailVerified: result.user.emailVerified,
          logInState: !this.state.logInState,
          userID: result.user.uid
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
    else {
      firebase.auth().signOut().then(() => {
        this.setState({
          username: "",
          emailVerified: false,
          logInState: !this.state.logInState
        })
        console.log("log out successful")
        
        window.location = "/";

      }).catch(function(error) {
        // An error happened.
      });
    }
    
  }

  render() {
    console.log(this.state.userID) 
    console.log(this.state.logInState)
    return (
     
    <Router>
      <div>
        <Route path="/" component={() => (<Header username={this.state.username} emailVerified={this.state.emailVerified} 
        onLogIn={() => this.handleLogInButton(this.state.logInState)} logInState={this.state.logInState}/>)}/>
        <Route path="/template" component={() => (<Template userID={this.state.userID}/> )}/>
        <Route path="/resources" component={Resources}/>
      </div>
    </Router>

    );
  }
}

export default App;




