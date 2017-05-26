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
     <div>
      
      <Route path="/" component={Header}/>
      <Route path="/template" component={Template}/>
      <Route path="/resources" component={Resources}/>

     </div>
  </Router>

    );
  }
}


export default App;
