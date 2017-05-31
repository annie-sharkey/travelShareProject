import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

require('./Resources.css');

const cardStyle = {
    width: "300px", 
    height: "80%", 
    margin: 12
}

const style = {
  margin: 12,
};

export default class Resources extends Component {
    render() {
        return (
           <MuiThemeProvider> 
           <div className="cards">
             <Card className="indvidual card" style={cardStyle}>
                <CardTitle title="TripAdvisor" subtitle="Read Reviews, Compare Prices & Book" />
                <CardMedia>
                    <img src= "http://www.stateofdigital.com/wp-content/uploads/2015/04/tripadvisor_logo.jpg"/>
                </CardMedia>
                <CardText>TripAdvisor finds the best hotel deals and provides millions of traveler reviews. </CardText>
                <RaisedButton href="https://www.tripadvisor.com/" label="EXPLORE" style={style}/>
             </Card> 

             <Card className="indvidual card" style={cardStyle}>
                <CardTitle title="Airbnb" subtitle="Book Homes From Local Hosts‎" />
                <CardMedia>
                    <img src= "https://static.tripping.com/uploads/image/0/221/tripping-airbnb.jpg"/>
                </CardMedia>
                <CardText>Airbnb offers a variety of vacation rentals for any travel location.</CardText>
                <RaisedButton href="https://www.airbnb.com/?af=43720035&c=A_TC%3Dta2zq9t9w9%26G_MT%3De%26G_CR%3D191568602767%26G_N%3Dg%26G_K%3Dairbnb.%26G_P%3D%26G_D%3Dc%26$pi:0.pk:25650614176_191568602767_c_59096482055&atlastest5=true&gclid=CPDMg-_hmtQCFRZLDQodcWwMuQ" label="EXPLORE" style={style}/>
             </Card> 

            <Card className="indvidual card" style={cardStyle}>
                <CardTitle title="FLIPKEY" subtitle="Search for Great Vacation Spots & Travel Ideas" />
                <CardMedia>
                    <img src= "https://static.tripping.com/uploads/image/0/425/flipkeylogo_hero.gif"/>
                </CardMedia>
                <CardText>FLIPKEY helps travelers identify where you want to go and cool activities to check out.</CardText>
                <RaisedButton href="https://www.flipkey.com/trip-ideas/" label="EXPLORE" style={style}/>
             </Card> 

            <Card className="indvidual card" style={cardStyle}>
                <CardTitle title="Travel+Leisure" subtitle="Trip Ideas: Vacations, Tours & Getaways" />
                <CardMedia>
                    <img src= "https://s3.amazonaws.com/genericimages/directory/travels/logos/imagen_travelandleisure_g.jpg"/>
                </CardMedia>
                <CardText>Travel+Leisure identifies fun activities to check out during your travels.</CardText>
                <RaisedButton href="http://www.travelandleisure.com/trip-ideas" label="EXPLORE" style={style}/>
             </Card> 

            <Card className="indvidual card" style={cardStyle}>
                <CardTitle title="Food and Travel Magazine" subtitle="Travel the world in search of the ultimate gourmet destinations" />
                <CardMedia>
                    <img src= "http://foodandtravel.com/assets/img/layout/ftlogo.png"/>
                </CardMedia>
                <CardText>Food and Travel Magazine identifies the best restaurants around the world.</CardText>
                <RaisedButton href="http://foodandtravel.com/" label="EXPLORE" style={style}/>
             </Card> 



            </div> 
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(<Resources />, document.getElementById('root'));
