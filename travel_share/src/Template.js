import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Background from '../images/main_img.jpg';
require('./Template.css');


export default class Template extends Component {
    render() {
        return (
            <div className = "background"> 
                {/*<img src={Background}/>*/}
                <h1> hello </h1>
             </div>
        )
    }
}

ReactDOM.render(<Template />, document.getElementById('root'));


