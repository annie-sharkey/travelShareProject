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
  backgroundColor: "#FF0000"
}; 

const cardStyle = {
  margin: 10,
  height: "100%",
  width: "250px"

}; 

export class TypeSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1, 
            titleText: "",
            inputText: "",
            category: "",
            list_of_categories: ["Day 1"],
            inputText_list: []
        }
        this.index_tracker = 0;       
    }

    handleMenuChange = (event, index, value) => {
        this.setState({
            ...this.state, 
            value
        });
        this.index_tracker = value;
        
    }

    handleInput = (event, inputText) => {
        
        this.setState({
            ...this.state, 
            inputText
        });

    }

    handleInputAdding = (categoryIndex) => {
        const itineraryItem = {
            index_of_text: categoryIndex,
            text_to_display: this.state.inputText
        }
        console.log(itineraryItem.index_of_text);
        this.setState({
            ...this.state,
            inputText_list: this.state.inputText_list.concat([itineraryItem]),
            inputText: ""
        });
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
            list_of_categories: this.state.list_of_categories.concat([this.state.category]),    
            category: ""
        })
        
    }

    onEditingCard = (categoryIndex) => {
        var currentCardTexts = this.state.inputText_list.filter(result => result.index_of_text == categoryIndex)
        var allCurrentCardTexttoEdit = this.state.inputText_list.filter(result => result.index_of_text == categoryIndex).map(result => result.text_to_display)
        var currentCardTexttoEdit = allCurrentCardTexttoEdit.join(' ')
        this.setState({
            ...this.state,
            inputText: currentCardTexttoEdit,
            // inputText_list: this.state.inputText_list
        })
    }
    
    onDeletingCard = (categoryIndex) => {
        this.setState({
            ...this.state,
            list_of_categories: this.state.list_of_categories.splice(categoryIndex, 1)
        })
    }
    
    render() {
        
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
                    <SelectField floatingLabelText = "Aspect" value={this.state.value} onChange={this.handleMenuChange}>
                        {this.state.list_of_categories.map((categoryItem, index) => {
                            return (
                                <MenuItem key={index} value={index} primaryText={categoryItem} />
                            );
                        })}
                    </SelectField>
                </div>
                <br />
                <div >
                    <TextField hintText={this.state.titleText} value={this.state.inputText} onChange={this.handleInput} multiLine={true}/> 
                    <br />
                    <RaisedButton label="Submit" onTouchTap={() => this.handleInputAdding(this.index_tracker)} style={style} />
                </div>         
            </div>
            <div className="display">
                    {this.state.list_of_categories.map((categoryItem, categoryIndex) => {
                            return (
                                <Card key={categoryIndex} className="individual card" style={cardStyle}>
                                    <CardTitle title={categoryItem}/>
                                    <CardText>{this.state.inputText_list
                                        .filter(result => result.index_of_text === categoryIndex)
                                        .map(result => <div>{result.text_to_display}</div>)}</CardText>
                                    <CardActions>
                                        <RaisedButton label="Edit" onTouchTap={() => this.onEditingCard(categoryIndex)} style={style}/>
                                        <RaisedButton label="Delete" onTouchTap={() => this.onDeletingCard(categoryIndex)} style={style}/>
                                    </CardActions>            
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


