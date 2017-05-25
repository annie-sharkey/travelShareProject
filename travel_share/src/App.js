import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Template from './Template';
import Resources from './Resources';

const Button = () => (
  <Router>
   <header>
     <div className = "nav">
        <Route exact path="/" component={App}/>
        <ul id="button">
        <li>
          <Link to="/template">Template</Link>
        </li>
        <li>
           <Link to="/resources">Resources</Link>
        </li>
        </ul>
        </div>
    <Route path="/template" component={Template}/>
    <Route path="/resources" component={Resources}/>
    </header>
  </Router>
)


class App extends Component {
 
  render() {
    return (
      <div className="App">
          <h1 id="title"> travelShare </h1>
      </div>
    );
  }
}




export default Button;
