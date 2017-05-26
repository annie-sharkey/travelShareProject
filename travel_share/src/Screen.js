import React, { Component } from 'react';
import ReactDOM from 'react-dom';

require('./Screen.css');


export default class Screen extends Component {
    render() {
        return (   
            <div className = "screen"> 
                <h3> Screen </h3>
             </div>
        )
    }
}

ReactDOM.render(<Screen />, document.getElementById('root'));