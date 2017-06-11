import React, { Component } from "react";

import InputCard from "./InputCard";
import RaisedButton from "material-ui/RaisedButton";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import DayList from "./DayList";

export default class TemplateRefactor extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <InputCard />

        </div>
      </MuiThemeProvider>
    );
  }
}
