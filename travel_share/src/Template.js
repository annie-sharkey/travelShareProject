import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

injectTapEventPlugin();
require('./Template.css');

const style = {
  height: 1000,
  width: 1000,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const PaperPanel = () => (
  <div>
    <Paper style={style} zDepth={2} />
  </div>
);

export class TypeSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 1, primaryText: "Flight"};
    }

    handleChange = (event, index, value, primaryText) => this.setState({value, primaryText});

    render() {
        return (
        <div className="selector">
            <SelectField 
                floatingLabelText = "Aspect"
                value={this.state.value} 
                primaryText={this.state.primaryText}
                onChange={this.handleChange}>
                <MenuItem value={1} primaryText={"Flight"} />
                <MenuItem value={2} primaryText={"Transportation"} />
                <MenuItem value={3} primaryText={"Lodging"} />
                <MenuItem value={4} primaryText={"Day 1"} />
                <MenuItem value={5} primaryText={"Day 2"} />
            </SelectField>
            <br />
            <TextField hintText="Enter here" />
            <br />
            <RaisedButton label="Submit"  />    
        </div>
        )
    }

}

export default class Template extends Component {    
    
    render() {
        return (
        <MuiThemeProvider>
            <div className ="template">
            <div className="sidebar">
            <h3> Select aspect of intinerary: </h3> 
            <TypeSelector />
            </div>
            <div className="panel">
                <PaperPanel />
            </div>
            </div>
      </MuiThemeProvider>
    );
  }

}


ReactDOM.render(<Template />, document.getElementById('root'));


