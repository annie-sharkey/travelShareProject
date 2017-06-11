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

const style = {
  margin: 80
};

var uuid = require("react-native-uuid");

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
      dayList: []
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
    var newDay = {
      dayID: uuid.v1(),
      title: this.state.title,
      description: this.state.description
    };
    this.setState({
      dayList: this.state.dayList.concat([newDay])
      // newDay: this.state.newDay[{ title: "", description: "" }]
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

  editDay = ID => {
    console.log("Entered");
  };

  render() {
    console.log(this.state.dayList);
    console.log(this.state.title);
    console.log(this.state.dayID);
    return (
      <MuiThemeProvider>
        <div>
          <DayList
            dayList={this.state.dayList}
            deleteDay={this.deleteDay}
            editDay={this.editDay}
          />
          {/*<RaisedButton
            label="Add Another Day"
            secondary={true}
            style={style}
          />*/}
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
