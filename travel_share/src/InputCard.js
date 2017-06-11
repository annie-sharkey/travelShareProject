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
import RaisedButton from "material-ui/RaisedButton";
var uuid = require("react-native-uuid");
const style = {
  margin: 80
};

export default class InputCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newDay: [
        {
          dayID: "",
          title: "",
          description: ""
        }
      ],
      dayList: [],
      hideInputBox: false
    };
  }

  handleTitle = event => {
    this.setState({
      ...this.state,
      title: event.target.value
    });
  };

  handleDescription = event => {
    this.setState({
      ...this.state,
      description: event.target.value
    });
  };

  handleCreateDay = event => {
    const hideInputBox = this.state.hideInputBox;
    var newDay = {
      dayID: uuid.v1(),
      title: this.state.title,
      description: this.state.description
    };
    this.setState({
      hideInputBox: true,
      dayList: this.state.dayList.concat([newDay])
      // newDay: this.state.newDay[{ title: "", description: "" }]
    });
  };

  handleAddDay = event => {
    const hide = this.state.hideInputBox;
    this.setState({
      hideInputBox: false
    });
  };

  //callback function
  deleteDay = ID => {
    this.setState({
      dayList: this.state.dayList.filter(day => {
        return day.dayID != ID;
      })
    });
  };

  //callback function
  editDay = ID => {
    console.log("Entered");
    console.log(ID);
  };

  render() {
    if (this.state.hideInputBox) {
      return (
        <div>
          <DayList
            dayList={this.state.dayList}
            deleteDay={this.deleteDay}
            editDay={this.editDay}
          />
          <MuiThemeProvider>
            <div className="addDayCard">
              <RaisedButton
                label="Add Another Day"
                secondary={true}
                onTouchTap={event => this.handleAddDay(event)}
              />
            </div>
          </MuiThemeProvider>
        </div>
      );
    } else {
      return (
        <MuiThemeProvider>
          <div>
            <Card style={style}>
              <CardText>
                <TextField
                  hintText="Hint Text"
                  floatingLabelText="Title"
                  onChange={event => this.handleTitle(event)}
                />
              </CardText>
              <CardText>
                <TextField
                  hintText="Full width"
                  floatingLabelText="Describe Your Day"
                  fullWidth={true}
                  multiLine={true}
                  rows={2}
                  rowsMax={4}
                  onChange={event => this.handleDescription(event)}
                />
              </CardText>

              <RaisedButton
                label="Finish Creating Your Day"
                fullWidth={true}
                onTouchTap={event => this.handleCreateDay(event)}
                backgroundColor="#81D4FA"
              />

            </Card>
          </div>
        </MuiThemeProvider>
      );
    }
  }
}
