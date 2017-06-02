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
import * as firebase from 'firebase';
import {travelShareApp} from "./firebase-config";

injectTapEventPlugin();
require('./Template.css');

var config = {
  apiKey: "AIzaSyDrLAr6U0jNQoLj50jhRid9PyOu5flf2tw",
  authDomain: "static-grid-168100.firebaseapp.com",
  databaseURL: "https://static-grid-168100.firebaseio.com",
  storageBucket: "static-grid-168100.appspot.com",
};



var database = firebase.database();
 
// var readData = firebase.database().ref('/userData ' + this.props.userID);



// style for button
const style = {
  marginRight: 20,
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
            inputText_list: [{
                categoryIndex: 0,
                text_to_display: "sample"
            }]
            
        }
        this.index_tracker = 0;
        this.submitState = true       
    }


    componentWillMount() {
        console.log(this.state.inputText_list);
        firebase.database().ref('/userData ' + this.props.userID).on('value', (snapshot) => {
            var data = snapshot.val();
            if(data){
                this.setState({
                ...this.state,
                inputText: "",
                category: "",
                list_of_categories: snapshot.val().categories,
                inputText_list: snapshot.val().inputText_list
                })
            }  
        });
    }

    handleMenuChange = (event, index, value) => {
        this.setState({
            ...this.state, 
            value,
            
        });
        if(!this.submitState) {
            this.submitState = !this.submitState
        } 
        this.index_tracker = value;
        
    }

    handleInput = (event, inputText) => {
        
        this.setState({
            ...this.state, 
            inputText
        });

    }

    writeInputTextList = (inputText_list, categories) => {
        firebase.database().ref('/userData ' + this.props.userID).set({
            inputText_list: inputText_list,
            categories: categories
        });
    }

    handleInputAdding = (categoryIndex) => {
        const itineraryItem = {
            categoryIndex: categoryIndex,
            text_to_display: this.state.inputText
        }
        this.setState({
            ...this.state,
            inputText_list: this.state.inputText_list.concat([itineraryItem]),
            inputText: ""
        });

        this.writeInputTextList(this.state.inputText_list.concat([itineraryItem]), this.state.list_of_categories);
    }

    handleInputEditing = (categoryIndex) => {

        const editedItineraryItem = {
            categoryIndex: categoryIndex,
            text_to_display: this.state.inputText
        }

        var currentCardTextObjects = this.state.inputText_list.filter(result => result.categoryIndex === categoryIndex)

        currentCardTextObjects[currentCardTextObjects.length-1] = editedItineraryItem

        var latestEditedItineraryItem = currentCardTextObjects.splice(currentCardTextObjects.length-1,1)

        var noncurrentCardTextObjects = this.state.inputText_list.filter(result => result.categoryIndex !== categoryIndex)

        var finalEditedInputsForAllCards = noncurrentCardTextObjects.concat(latestEditedItineraryItem)

        this.setState({
           ...this.state, 
           inputText_list: finalEditedInputsForAllCards,
           inputText: ""
        })

        this.submitState = !this.submitState
        
        this.writeInputTextList(finalEditedInputsForAllCards, this.state.list_of_categories);
    }
   
    handleCategoryChange = (event, category) => {
        this.setState({
            ...this.setState,
            category,
             
        });
        
    }
    
    writeListOfCategories = (inputText_list, categories) => {
        firebase.database().ref('/userData ' + this.props.userID).set({
            inputText_list: inputText_list,
            categories: categories
        });
    }

    onAddingCard = () => {
        
        this.setState({
            ...this.state, 
            list_of_categories: this.state.list_of_categories.concat([this.state.category]),    
            category: ""
        })
        
        this.writeListOfCategories(this.state.inputText_list, this.state.list_of_categories.concat([this.state.category]));
    }

    onEditingCard = (categoryIndex) => {
        
        var allCurrentCardTextToEdit = this.state.inputText_list.filter(result => result.categoryIndex === categoryIndex).map(result => result.text_to_display)
        var currentCardTextToEdit = allCurrentCardTextToEdit.join(' ')
        
        this.setState({
            ...this.state,
            inputText: currentCardTextToEdit,
            
            // inputText_list: this.state.inputText_list
        })

        this.submitState = !this.submitState
    }
    
    // onDeletingCard = (categoryIndex) => {
    //     var removed_category = this.state.list_of_categories.splice(categoryIndex, 1)
    //     console.log(this.state.inputText_list)
    //     console.log(this.state.list_of_categories)
    //     // var indexOfDeletedCategory = 
    //     this.setState({
    //         ...this.state,
    //         list_of_categories: this.state.list_of_categories
    //     })
    // }
    
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
                    <RaisedButton label={this.submitState ? 'Submit' : 'ReSubmit'} onTouchTap={this.submitState? () => this.handleInputAdding(this.index_tracker) : () => this.handleInputEditing(this.index_tracker)} style={style} />  
                </div>         
            </div>
            <div className="display">
                    {this.state.list_of_categories.map((categoryItem, categoryIndex) => {
                            return (
                                <Card key={categoryIndex} className="individual card" style={cardStyle}>
                                    <CardTitle title={categoryItem}/>
                                    <CardText>{this.state.inputText_list
                                        .filter(result => result.categoryIndex === categoryIndex)
                                        .map(result => <div>{result.text_to_display}</div>)}</CardText>
                                    <CardActions>
                                        <RaisedButton label="Edit" onTouchTap={() => this.onEditingCard(categoryIndex)} style={style}/>
                                        {/*<RaisedButton label="Delete" onTouchTap={() => this.onDeletingCard(categoryIndex)} style={style}/>*/}
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
    
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.userID)
        return (
        <MuiThemeProvider>
            <div className ="template">
                    <TypeSelector userID={this.props.userID}/>
            </div>
      </MuiThemeProvider>
    );
  }

}


ReactDOM.render(<Template />, document.getElementById('root'));


