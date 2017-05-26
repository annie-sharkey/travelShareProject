import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Header extends Component {
 
  render() {
    return (
          <span id="title"> travelShare </span>

    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));