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
      hide: false,
      addDay: false
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
    const hide = this.state.hide;
    var newDay = {
      dayID: uuid.v1(),
      title: this.state.title,
      description: this.state.description
    };
    this.setState({
      hide: true,
      dayList: this.state.dayList.concat([newDay])
      // newDay: this.state.newDay[{ title: "", description: "" }]
    });
  };

  handleAddDay = event => {
    const hide = this.state.hide;
    this.setState({
      hide: false
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
  };

  render() {
    if (this.state.hide) {
      return (
        <div>
          <DayList
            dayList={this.state.dayList}
            deleteDay={this.deleteDay}
            editDay={this.editDay}
          />
          <MuiThemeProvider>
            <RaisedButton
              label="Add Another Day"
              secondary={true}
              onTouchTap={event => this.handleAddDay(event)}
            />
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
