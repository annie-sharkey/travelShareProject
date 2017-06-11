import React, { Component } from "react";

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import RaisedButton from "material-ui/RaisedButton";

import FlatButton from "material-ui/FlatButton";

const style = {
  margin: 80
};

export default class DayList extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div>
            {this.props.dayList.map(item => {
              return (
                <Card style={style} key={item.dayID}>
                  <CardHeader
                    title={item.title}
                    actAsExpander={true}
                    showExpandableButton={true}
                  />
                  <CardText expandable={true}>
                    {item.description}

                  </CardText>
                  <CardActions>
                    <FlatButton
                      label="Edit"
                      onTouchTap={event => this.props.editDay(item.dayID)}
                    />
                    <FlatButton
                      label="Delete"
                      onTouchTap={event => this.props.deleteDay(item.dayID)}
                    />
                  </CardActions>

                </Card>
              );
            })}

          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
