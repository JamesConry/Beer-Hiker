import React, { Component } from "react";
import NavBarOut from "../NavBarOut/NavBarOut";
import "./Landing.css";
import 'bulma/css/bulma.css';

class Landing extends Component {

  render() {
    return (
      <div className="background">
        <NavBarOut />

      
      <section className="hero col s12 center-align">
        <div className="hero-head">
          <div className="container">
          <section className="hero bigSamples is-large"> 
        <div className="hero-body"> 
          <div className="container has-text-centered"> 
          <div className="container valign-wrapper">
          </div>
            </div> 
          </div> 
        </section>
          </div>
        </div>
      </section>
        

        <br />
  
      </div>
    );
  }
}

export default Landing;
