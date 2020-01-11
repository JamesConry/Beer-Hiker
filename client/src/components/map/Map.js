import React, { Component } from "react";
import 'bulma/css/bulma.css';
import { Link } from "react-router-dom";
import NavBarIn from "../NavBarIn/NavBarIn";
import HEREMap from "react-here-maps";

 //Step 1: initialize communication with the platform
    // In your own code, replace variable window.apikey with your own apikey
    var platform = new H.service.Platform({
      apikey: 'y9zAgfmXparcQIOYyJc5p2vZk7myObDlBJuy5hwsvjo'
    });
    var defaultLayers = platform.createDefaultLayers();

    //Step 2: initialize a map - this map is centered the first stop in the user list (brew0)

    map = new H.Map(document.getElementById('mapContainer'),
      defaultLayers.vector.normal.map,{
      center: {lat:startLatitude, lng:startLongitude},
      zoom: 8,
      pixelRatio: window.devicePixelRatio || 1
    });
class Map extends Component {
    render() {
      return (
        <div>
          <NavBarIn />
          <div className="container">
            <br />
            <div className="row center">
  
              <h1>
                {" "}
                <span>Map Results</span>
              </h1>
            </div>
            <br />
            <div className="container" >
              
            </div>
            <div className={`right`}>
              <Link to="/beer">
                <button class="button is-primary has-text-weight-bold">New Search</button>
              </Link>
              <Link to="/map">
                <button class="button is-black has-text-weight-bold">Save Breweries</button>
              </Link>
            </div>
          </div>
        </div>

      );
    }
  };
  
  export default Map;
  
  
  
  
  