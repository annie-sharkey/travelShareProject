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


export class TypeSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1, 
            titleText: "",
            inputText: "",
            category: "",
            list_of_categories: ["Day 1", "Day 2"]
        };
        
    }

    handleMenuChange = (event, index, value) => {
        this.setState({
            ...this.state, 
            value
        });

    }

    handleInput = (event, inputText) => {
        this.setState({...this.state, inputText});
    }

   
    handleCategoryChange = (event, category) => {
        this.setState({
            ...this.setState,
            category,
             
        });
        
    }
    
    onAddingCard = () => {
        
        this.setState({
            ...this.state, 
            list_of_categories: this.state.list_of_categories.concat(this.state.category)    
        })
        
    }

    
    render() {
        console.log(this.state.category);
        console.log(this.state.list_of_categories);
        return (
        <div>
            <div className="selector">
                <h3> Add A Category </h3>
                <TextField hintText="Enter New Category" value={this.state.category} onChange={this.handleCategoryChange}/>
                <FloatingActionButton onTouchTap={() => this.onAddingCard(this.state.category)} mini={true} style={style}>
                    <ContentAdd />
                </FloatingActionButton>    
                <h3> Select Aspect Of Itinerary: </h3> 
                <div>
                    <SelectField 
                        floatingLabelText = "Aspect"
                        value={this.state.value}
                        onChange={this.handleMenuChange}
                    >
                        <MenuItem value={1} primaryText={"Day 1"} />
                        <MenuItem value={2} primaryText={"Day 2"} />
                    </SelectField>
                </div>
                <br />
                    <TextField hintText={this.state.titleText} value={this.state.inputText} onChange={this.handleInput} multiLine={true}/>  
            </div>
            <div className="display">
                <Card className="individual card">
                    <CardTitle title={this.state.titleText} subtitle="information" />
                    <CardText> {this.state.inputText} </CardText>
                </Card> 
                {this.state.list_of_categories.map((categoryItem) => {
                        return (
                            <Card className="individual card">
                                <CardTitle title={categoryItem}/>
                            </Card> 
                        );
                    })}
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


