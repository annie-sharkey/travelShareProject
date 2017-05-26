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

class App extends Component {
 
  render() {
    return (
    <Router>
     <div className = "heading"> <Link to="/">  </Link> 
     <Header />
      <ul id="button">
        <li>
          <Link to="/resources">Resources</Link> 
        </li>
        <li>
           <Link to="/template">Template</Link>
        </li>
        </ul>
    
    <Route path="/template" component={Template}/>
    <Route path="/resources" component={Resources}/>

     </div>
  </Router>

    );
  }
}


export default App;
