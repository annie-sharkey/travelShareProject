import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Panel from './Panel';
import Screen from './Screen';

require('./Template.css');


export default class Template extends Component {
    render() {
        return (   
            <div className = "sidebar"> 
                <Panel />
                <Screen />
            </div>
        )
    }
}

ReactDOM.render(<Template />, document.getElementById('root'));


