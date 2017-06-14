import React, { Component } from "react";

import DayList from "./DayList";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import * as firebase from "firebase";
import { travelShareApp } from "./firebase-config";
var database = firebase.database();

var uuid = require("react-native-uuid");

const style = {
  margin: 80
};

const addButtonStyle = {
  margin: 0
};

export default class InputCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayList: [],
      itineraryItemList: [],
      hideInputBox: false,
      resubmit: false,
      editedDayID: ""
    };
  }

  componentWillMount() {
    firebase
      .database()
      .ref("/userData " + this.props.userID)
      .on("value", snapshot => {
        var data = snapshot.val();
        if (data) {
          this.setState({
            dayList: snapshot.val().dayList
          });
        }
      });
  }

  writeDayList = dayList => {
    firebase.database().ref("/userData " + this.props.userID).set({
      dayList: dayList
    });
  };

  handleTitle = event => {
    this.setState({
      ...this.state,
      title: event.target.value
    });
  };

  handleDescription = event => {
    this.setState({
      ...this.state,
      stringInput: event.target.value
    });
  };

  addItineraryItem = event => {
    var itineraryItem = {
      itemID: uuid.v1(),
      stringInput: this.state.stringInput
    };

    var updatedDescription = this.state.itineraryItemList;
    updatedDescription = updatedDescription.concat([itineraryItem]);

    // var update = {
    //   dayID: uuid.v1(),
    //   title: this.state.title,
    //   description: updatedDescription
    // };

    this.setState({
      ...this.state,
      itineraryItemList: updatedDescription
      // dayList: this.state.dayList.concat([update])
    });
  };

  handleCreateDay = event => {
    var newDay = {
      dayID: uuid.v1(),
      title: this.state.title,
      description: this.state.itineraryItemList
    };
    this.setState({
      ...this.state,
      hideInputBox: true,
      dayList: this.state.dayList.concat([newDay])
    });
    this.writeDayList(this.state.dayList.concat([newDay]));
  };

  handleAddDay = event => {
    this.setState({
      hideInputBox: false,
      resubmit: false,
      title: "",
      description: ""
    });
  };

  handleGoBack = event => {
    this.setState({
      hideInputBox: true
    });
  };

  //callback function
  deleteDay = ID => {
    this.setState({
      dayList: this.state.dayList.filter(day => {
        return day.dayID != ID;
      })
    });
    this.writeDayList(
      this.state.dayList.filter(day => {
        return day.dayID != ID;
      })
    );
  };

  //callback function
  editDay = ID => {
    const editedDayID = this.state.editedDayID;
    const day = this.state.dayList.find(day => day.dayID === ID);
    this.setState({
      hideInputBox: false,
      title: day.title,
      description: day.description,
      resubmit: true,
      editedDayID: ID
    });
  };

  handleResubmit = event => {
    const dayIndex = this.state.dayList.findIndex(
      day => day.dayID === this.state.editedDayID
    );
    const updateDay = {
      dayID: this.state.editedDayID,
      title: this.state.title,
      description: this.state.description
    };
    const updatedDayList = this.state.dayList.slice(0);
    updatedDayList[dayIndex] = updateDay;

    this.setState({
      dayList: updatedDayList,
      title: "",
      description: "",
      hideInputBox: true
    });
    this.writeDayList(updatedDayList);
  };

  render() {
    console.log(this.state.dayList);
    if (this.state.hideInputBox) {
      return (
        <div>

          <MuiThemeProvider>
            <RaisedButton
              label="Add Another Day"
              labelColor="white"
              backgroundColor="#2196F3"
              onTouchTap={event => this.handleAddDay(event)}
              fullWidth={true}
              style={addButtonStyle}
            />
          </MuiThemeProvider>

          <DayList
            dayList={this.state.dayList}
            deleteDay={this.deleteDay}
            editDay={this.editDay}
          />
        </div>
      );
    } else {
      return (
        <MuiThemeProvider>
          <div>
            <Card style={style}>
              <CardText>
                <TextField
                  floatingLabelText="Title"
                  onChange={event => this.handleTitle(event)}
                  value={this.state.title}
                />
              </CardText>
              <CardText>
                <TextField
                  floatingLabelText="Describe Your Day"
                  fullWidth={true}
                  multiLine={true}
                  rows={2}
                  rowsMax={4}
                  value={this.state.description}
                  onChange={event => this.handleDescription(event)}
                />
                <FlatButton
                  label="Add Item"
                  primary={true}
                  onTouchTap={event => this.addItineraryItem(event)}
                />
              </CardText>

              <FlatButton
                label="Back"
                primary={true}
                onTouchTap={event => this.handleGoBack(event)}
              />

              <FlatButton
                label={
                  this.state.resubmit ? "Resubmit" : "Finish Creating Your Day"
                }
                onTouchTap={
                  this.state.resubmit
                    ? event => this.handleResubmit(event)
                    : event => this.handleCreateDay(event)
                }
                secondary={true}
              />

            </Card>
          </div>
        </MuiThemeProvider>
      );
    }
  }
}
