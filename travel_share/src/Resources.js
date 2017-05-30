import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

require('./Resources.css');

export default class Resources extends Component {
    render() {
        return (
           <MuiThemeProvider> 
           <div className="cards">
             <Card className="indvidual card">
                <CardTitle title="sample" subtitle="information" />
                <CardText> Visit this Website! </CardText>
             </Card> 
             <Card className="individual card">
                <CardTitle title="sample" subtitle="information" />
                <CardText> Visit this Website! </CardText>
             </Card> 
            </div> 
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(<Resources />, document.getElementById('root'));
