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

const NavButtons = () => (
   <Router>
    <div>
      <FlatButton label="Template" primary={true} containerElement={<Link to="/template"/>}/>
      <FlatButton label="Resources" primary={true} containerElement={<Link to="/resources"/>}/>
    </div>
  </Router>
);


const NavBar = () => (
  <AppBar
    title="travelShare"
    iconElementRight = {
      <NavButtons />
    }
    style={{
      backgroundColor: 'black',
    }}
  />
);

export default class Header extends Component {
 
  render() {
    return (
      <Router>
      <div id="title"> 
        <MuiThemeProvider>
          <NavBar />
        </MuiThemeProvider>
      </div>
    </Router>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));