import React, { Component } from 'react';
import ReactDOM from 'react-dom';

require('./Panel.css');


export default class Panel extends Component {
    render() {
        return (   
            <div className = "panel"> 
                <h3> Planning </h3>
                <TypeSelector />
             </div>
        )
    }
}

class TypeSelector extends Component {
    constructor(props) {
    super(props);
    this.state = {value: 'flight'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
    handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('You have selected: ' + this.state.value); // change this to update the boxed on the screen
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Select aspect of Itinerary:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Flight"> Flight </option>
            <option value="Day 1">Day 1</option>
            <option value="Day 2">Day 2</option>
            <option value="Hotel">Hotel</option>
            <option value="Transportation">Transportation</option>
          </select>
        </label>
        <input type="submit" value="Select" />
      </form>
    );
  }
}  
    

ReactDOM.render(<Panel />, document.getElementById('root'));