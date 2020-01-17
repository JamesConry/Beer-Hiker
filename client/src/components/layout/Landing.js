import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBarOut from "../NavBarOut/NavBarOut";
import "./Landing.css";
import 'bulma/css/bulma.css';
import logo from '../../images/BeerHikerLogo2.jpg';
import image from '../../images/beerSamples.jpg';


class Landing extends Component {

  

  render() {
    return (
      <div className="container">
        <NavBarOut />
        <br />
        <div className="start">
          <div className="columns">
            <div className="column is-three-fifths">
              <p>Please Log In or Register For an Account</p>
            </div>
            <div className="column is-one-fifths">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1px"
                }}
                className="btn btn-large waves-effect waves-light hoverable orange accent-3"
              >
                Register
                </Link>
            </div>
            <div className="column is-one-fifths">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1px"
                }}
                className="btn btn-large waves-effect waves-light hoverable orange accent-3"
              >
                Log In
                </Link>
            </div>
          </div>
          
        </div>
        <br />
        <div className="landingBackground">
          <img src={image} className="landingBackground" alt='beer image' />
          <figure className="image is-4by3">
            <iframe className="has-ratio" width="640" height="480" img src="../../images/beerSamples.jpg" frameBorder="0"
              allowFullScreen></iframe>
          </figure>
        </div>
      </div>
    );
  }
}

export default Landing;
