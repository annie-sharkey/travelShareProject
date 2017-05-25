import React, { Component } from 'react';
import ReactDOM from 'react-dom';
require('./Template.css');


export default class Template extends Component {
    render() {
        return (
            <div className = "sidebar"> 
                <h1> hello </h1>
             </div>
        )
    }
}

ReactDOM.render(<Template />, document.getElementById('root'));


