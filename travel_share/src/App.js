import * as firebase from "firebase";
import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Template from "./Template";
import Resources from "./Resources";
import Header from "./Header";
import { travelShareApp } from "./firebase-config";

import TemplateRefactor from "./TemplateRefactor";

var provider = new firebase.auth.GoogleAuthProvider();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logInState: true
    };
  }

  handleLogInButton(logInState) {
    if (this.state.logInState) {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          this.setState({
            username: result.user.displayName,
            emailVerified: result.user.emailVerified,
            logInState: !this.state.logInState,
            userID: result.user.uid
          });
          var token = result.credential.accessToken;
          var user = result.user;
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
        });
    } else {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.setState({
            username: "",
            emailVerified: false,
            logInState: !this.state.logInState
          });
          window.location = "/";
        })
        .catch(function(error) {});
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Route
            path="/"
            component={() =>
              <Header
                username={this.state.username}
                emailVerified={this.state.emailVerified}
                onLogIn={() => this.handleLogInButton(this.state.logInState)}
                logInState={this.state.logInState}
              />}
          />
          <Route
            path="/template"
            component={() => <TemplateRefactor userID={this.state.userID} />}
          />
          <Route path="/resources" component={Resources} />
        </div>
      </Router>
    );
  }
}

export default App;
