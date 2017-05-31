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

const cardStyle = {
  margin: 10,
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
            inputText_list: [
                {
                    index_of_text: 0,
                    text_to_display: "sample"
                }
            ],
            filteredResults: [
                {
                    index_of_text: 0,
                    text_to_display: "sample" 
                }
            ]
        };
        
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

    handleInputAdding = (index_tracker) => {
        const display_text = {
            index_of_text: this.index_tracker,
            text_to_display: this.state.inputText
        }
        console.log(display_text.index_of_text);
        this.setState({
            ...this.state,
            inputText_list: this.state.inputText_list.concat([display_text]),
            filteredResults: this.state.inputText_list.filter((texts)=> {
                return (
                    texts.index_of_text == this.index_tracker
                    )
            })
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
            list_of_categories: this.state.list_of_categories.concat([this.state.category])    
        })
        
    }
    
/*     filteredResults = this.state.inputText_list.filter((texts)=> {
            return (
                texts.index_of_text == this.index_tracker
                )
        });*/
    
    render() {
        console.log(this.state.inputText);
        console.log(this.index_tracker);
        console.log(this.state.inputText_list);
        console.log(this.state.filteredResults);
        if(this.state.inputText_list.length > 0) {
            console.log(this.state.inputText_list[0].text_to_display);
        }

        
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
                    <RaisedButton label="Submit" primary={true} onTouchTap={() => this.handleInputAdding(this.index_tracker)} />
                </div>         
            </div>
            <div className="display">
                    {this.state.list_of_categories.map((categoryItem, index) => {
                            return (
                                <Card key={index} className="individual card" style={cardStyle}>
                                    <CardTitle title={categoryItem}/>
                                    {/*<CardText>{this.state.filteredResults[index].text_to_display}</CardText>*/}
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


