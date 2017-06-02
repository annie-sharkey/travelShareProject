import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';



export default class Header extends Component {
  // componentDidMount() {
  //   console.log(this.props.username)
  //   console.log(this.props.emailVerified)
  // }

  constructor(props) {
        super(props);
        this.state = {
          username: this.props.username,
          emailVerified: this.props.emailVerified,
          logInState: true
        }
  } 
  handleLogInButton = () => {
    this.setState({
      ...this.state,
      logInState: !this.state.logInState
    })
  }

  render() {
    return (
      <Router>
      <div id="title"> 
        <MuiThemeProvider>
          <div id="headerBar">
            <AppBar
              title="travelShare"
              iconElementRight = { 
                <div>
                  <RaisedButton label={this.state.logInState ? "Log In" : "Log Off"} primary={true} onTouchTap={this.handleLogInButton}/>
                  <FlatButton label="Template" primary={true} disabled={this.state.emailVerified ? false : true} containerElement={<Link to="/template"/>}/>
                  <FlatButton label="Resources" primary={true} disabled={this.state.emailVerified ? false : true} containerElement={<Link to="/resources"/>}/>
                </div> 
              }
              showMenuIconButton={false}
              style={{
                backgroundColor: 'black',
              }}
            />
            <h6 className="welcomeMessage"> Welcome {this.state.username}! </h6>
          </div>
        </MuiThemeProvider>
      </div>
    </Router>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));