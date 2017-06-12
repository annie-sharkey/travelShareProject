import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Header.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import IconButton from "material-ui/IconButton";
import ActionHome from "material-ui/svg-icons/action/home";

const headerButtonStyle = {
  marginRight: 12
};

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div id="title">
          <MuiThemeProvider>
            <div id="headerBar">
              <AppBar
                title="travelPlanner"
                iconElementRight={
                  <div>

                    <FlatButton
                      label="Template"
                      primary={true}
                      disabled={this.props.emailVerified ? false : true}
                      containerElement={<Link to="/template" />}
                      style={headerButtonStyle}
                    />
                    <FlatButton
                      label="Resources"
                      primary={true}
                      disabled={this.props.emailVerified ? false : true}
                      containerElement={<Link to="/resources" />}
                      style={headerButtonStyle}
                    />
                    <FlatButton
                      label={this.props.logInState ? "Log In" : "Log Out"}
                      secondary={true}
                      onTouchTap={this.props.onLogIn}
                      containerElement={<Link to="/" />}
                      style={headerButtonStyle}
                    />

                  </div>
                }
                showMenuIconButton={false}
                style={{
                  backgroundColor: "black"
                }}
              />
              <h6 className="welcomeMessage">
                {" "}Welcome {this.props.username}!
                {" "}
              </h6>
            </div>
          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById("root"));
