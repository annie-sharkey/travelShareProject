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
require('./Template.css');


// style for button
const style = {
  marginRight: 20,
}; 


const AddButton = () => (
    <div>
    <FloatingActionButton mini={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>
    </div>
);

export class TypeSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1, 
            primaryText: "Flight",
            inputText: ""
        };
    }

    handleMenuChange = (event, index, value) => this.setState({value});

    handleInput = (event, index, inputText) => this.setState({inputText});

    render() {
        return (
        <div>
        <div className="selector">
            <h3> Select Aspect Of Itinerary: </h3> 
            <div>
            <SelectField 
                floatingLabelText = "Aspect"
                value={this.state.value} 
                onChange={this.handleMenuChange}>
                <MenuItem value={1} primaryText={"Flight"} />
                <MenuItem value={2} primaryText={"Transportation"} />
                {/*<MenuItem value={3} primaryText={"Lodging"} />
                <MenuItem value={4} primaryText={"Day 1"} />
                <MenuItem value={5} primaryText={"Day 2"} />*/}
            </SelectField>
            </div>
            <br />
            <div >
                <TextField hintText={"Enter Here"} value={this.state.inputText} onChange={this.handleInput}/>
            </div>
            <br />
            <RaisedButton label="Submit"  />   
            <h3> Add A Category </h3>
            <TextField hintText="Enter New Category"  />
            <AddButton />
        </div>
        <div className="display">
             <Card>
                <CardTitle subtitle="information" />
                <CardText> {this.state.inputText} </CardText>
             </Card> 
        </div> 
        </div>   
        )
    }

}


export default class Template extends Component {    
    
    render() {
        return (
        <MuiThemeProvider>
            <div className ="template">
                    
                    <TypeSelector />
            </div>
      </MuiThemeProvider>
    );
  }

}


ReactDOM.render(<Template />, document.getElementById('root'));


