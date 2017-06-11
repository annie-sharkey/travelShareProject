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

const style = {
  margin: 80
};

export default class DayList extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div>
            {this.props.dayList.map((item, index) => {
              return (
                <Card style={style} key={index}>
                  <CardHeader
                    title={item.title}
                    actAsExpander={true}
                    showExpandableButton={true}
                  />
                  <CardText expandable={true}>
                    {item.description}
                  </CardText>

                </Card>
              );
            })}

          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
