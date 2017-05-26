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
      <Router>
      <div id="title"> travelShare
        <ul id="button">
        <li>
          <Link to="/resources">Resources</Link> 
        </li>
        <li>
           <Link to="/template">Template</Link>
        </li>
        </ul> 
        </div>
        </Router>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));