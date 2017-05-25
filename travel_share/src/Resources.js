import React, { Component } from 'react';
import ReactDOM from 'react-dom';

require('./Resources.css');

export default class Resources extends Component {
    render() {
        return (
            <div> 
                <h1> welcome to resources </h1>
             </div>
        )
    }
}

ReactDOM.render(<Resources />, document.getElementById('root'));
