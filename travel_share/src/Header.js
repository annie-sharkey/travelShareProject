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

const AppBarExampleIcon = () => (
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);
export default class Header extends Component {
  render() {
    return (
    <div>
      <MuiThemeProvider>
        <AppBarExampleIcon/>
      </MuiThemeProvider>
    </div>

    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));