import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

require('./Resources.css');


const cardStyle = {
    width: "250px",
    height: "80%",
    margin: 12,
}

const imgStyle = {
    padding: 20
}


export default class Resources extends Component {
    
    render() {
        return (
           <MuiThemeProvider> 
           <div className="cards">
             <Card className="indvidual card" style={cardStyle}>
                <CardTitle title="Frommer's" subtitle="Travel Guides: Trip Ideas, Inspiration & Deals" />
                    <CardMedia>
                        <img src="http://www.riadkniza.com/images/press/frommers.png" />
                    </CardMedia>
                <CardText> Frommer's offers ideas and inspiration for travel desinations, itineraries along with deals for users. </CardText>
                <CardActions>
                    <RaisedButton href="http://www.frommers.com/" label="Explore"/>   
                </CardActions>
             </Card> 

             <Card className="individual card" style={cardStyle}>
                <CardTitle title="Kayak" subtitle="Search hundreds of travel sites at once." />
                    <CardMedia>
                        <img src="http://switzerlandstartupjobs.com/wp-content/uploads/job-manager-uploads/company_logo/2015/08/KAYAK-banner.jpg" />
                    </CardMedia>
                <CardText> Kayak allows users to find information on hotels, flights, rentals, and more by pulling information from multiple websites. </CardText>
                <CardActions>
                    <RaisedButton href="https://www.kayak.com/" label="Explore"/>
                </CardActions>
             </Card> 

             <Card className="individual card" style={cardStyle}>
                <CardTitle title="Skiplagged" subtitle="The smart way to find cheap flights." />
                    <CardMedia>
                        <img src="http://takingflights.com/wp-content/uploads/Skiplagged-1024x267.jpg" />
                    </CardMedia>
                <CardText> Skiplagged is a pro-consumer travel website that aims to save users hundreds of dollars on flight tickets. </CardText>
                <CardActions>
                    <RaisedButton href="https://skiplagged.com/" label="Explore"/>
                </CardActions>
             </Card> 

             <Card className="individual card" style={cardStyle}>
                <CardTitle title="Costco Travel" subtitle="The smart way to find cheap flights." />
                    <CardMedia style={imgStyle}>
                        <img src="https://www.costcotravel.com/content/shared/images/logos/costco-travel-logo.png" />
                    </CardMedia>
                <CardText> Costco Travel offers members packages and deals to top destinations around the world. </CardText>
                <CardActions>
                    <RaisedButton href="https://www.costcotravel.com/" label="Explore"/>
                </CardActions>
             </Card>

             <Card className="individual card" style={cardStyle}>
                <CardTitle title="Hostelz" subtitle="The Hostel Information Database." />
                    <CardMedia style={imgStyle}>
                        <img src="http://ww1.prweb.com/prfiles/2015/10/26/13037214/logo---huge.png" />
                    </CardMedia>
                <CardText> Hostelz is the best website to find hostels and cheap accomodations all around the world.  </CardText>
                <CardActions>
                    <RaisedButton href="https://www.hostelz.com/" label="Explore"/>
                </CardActions>
             </Card>

             <Card className="indvidual card" style={cardStyle}>
                <CardTitle title="TripAdvisor" subtitle="Read Reviews, Compare Prices & Book" />
                    <CardMedia>
                        <img src= "http://www.stateofdigital.com/wp-content/uploads/2015/04/tripadvisor_logo.jpg"/>
                    </CardMedia>
                <CardText>TripAdvisor finds the best hotel deals and provides millions of traveler reviews. </CardText>
                <CardActions>
                    <RaisedButton href="https://www.tripadvisor.com/" label="EXPLORE" />
                </CardActions>
             </Card> 

             <Card className="indvidual card" style={cardStyle}>
                <CardTitle title="Food and Travel Magazine" subtitle="Travel the world in search of the ultimate gourmet destinations" />
                    <CardMedia style={imgStyle}>
                        <img src= "http://foodandtravel.com/assets/img/layout/ftlogo.png"/>
                    </CardMedia>
                <CardText>Food and Travel Magazine identifies the best restaurants around the world.</CardText>
                <CardActions>
                    <RaisedButton href="http://foodandtravel.com/" label="EXPLORE"/>
                </CardActions>    
             </Card> 

             <Card className="indvidual card" style={cardStyle}>
                <CardTitle title="Airbnb" subtitle="Book Homes From Local Hosts‎" />
                    <CardMedia>
                        <img src= "https://static.tripping.com/uploads/image/0/221/tripping-airbnb.jpg"/>
                    </CardMedia>
                <CardText>Airbnb offers a variety of vacation rentals for any travel location.</CardText>
                <CardActions>
                    <RaisedButton href="https://www.airbnb.com/?af=43720035&c=A_TC%3Dta2zq9t9w9%26G_MT%3De%26G_CR%3D191568602767%26G_N%3Dg%26G_K%3Dairbnb.%26G_P%3D%26G_D%3Dc%26$pi:0.pk:25650614176_191568602767_c_59096482055&atlastest5=true&gclid=CPDMg-_hmtQCFRZLDQodcWwMuQ" label="EXPLORE"/>
                </CardActions>
             </Card> 

            <Card className="indvidual card" style={cardStyle}>
                <CardTitle title="FLIPKEY" subtitle="Search for Great Vacation Spots & Travel Ideas" />
                    <CardMedia>
                        <img src= "https://static.tripping.com/uploads/image/0/425/flipkeylogo_hero.gif"/>
                    </CardMedia>
                <CardText>FLIPKEY helps travelers identify where you want to go and cool activities to check out.</CardText>
                <CardActions>
                    <RaisedButton href="https://www.flipkey.com/trip-ideas/" label="EXPLORE" />
                </CardActions>    
             </Card> 

            <Card className="indvidual card" style={cardStyle}>
                <CardTitle title="Travel+Leisure" subtitle="Trip Ideas: Vacations, Tours & Getaways" />
                    <CardMedia style={imgStyle}>
                        <img src= "https://s3.amazonaws.com/genericimages/directory/travels/logos/imagen_travelandleisure_g.jpg"/>
                    </CardMedia>
                <CardText>Travel+Leisure identifies fun activities to check out during your travels.</CardText>
                <CardActions>
                    <RaisedButton href="http://www.travelandleisure.com/trip-ideas" label="EXPLORE" />
                </CardActions>    
             </Card> 

            


            </div> 
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(<Resources />, document.getElementById('root'));
