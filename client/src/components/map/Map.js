import React, { Component } from "react";
import 'bulma/css/bulma.css';
import { Link } from "react-router-dom";
import NavBarIn from "../NavBarIn/NavBarIn";

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
  
  
  
  
  