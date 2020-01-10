import React, { Component } from "react";
import 'bulma/css/bulma.css'
import NavBarIn from "../NavBarIn/NavBarIn";

// import { Link } from "react-router-dom";

class Results extends Component {
  render() {
    return (
      <div>
        <NavBarIn />
        <div className="container">
          <br />
          <div className="row center">

            <h1>
              {" "}
              <span>SEARCH FOR A BREWERY</span>
            </h1>
          </div>
          <br />
          <div className="container" >
            <div>
            <label className="checkbox">
              <input type="checkbox"></input>
            </label>
            </div>
            <div className="section" >
              <div className="card is-horizontal columns" >
                <div className="card-image column is-three-fifths" >

                

                  <div className="media-content">
                    <p className="title is-4">Once upon a time there was a sailor</p>
                  </div>

                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
};

export default Results;




