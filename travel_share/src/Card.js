import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

injectTapEventPlugin();
require('./Card.css');

export default class TypeSelector extends Component {
    constructor(props) {
        super(props);
        this.state= {


        }
    }
    render() {
        return (

        )
    }
}

export default class Card extends Component {
    render () {
        return (
            <MuiThemeProvider>
                <div className ="template">
                    <TypeSelector />
                </div>
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(<Card />, document.getElementById('root'));