import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBarOut from "../NavBarOut/NavBarOut";
import "../layout/Landing.css";
import logo from '../../images/BeerHikerLogo2.jpg';


class Landing extends Component {

  

  render() {
    return (
      <div class="background">
        <div>
       
        <section class="hero col s12 center-align">
          <div class="hero-head">
            
            <div class="container">
            <section class="hero is-large has-sm-img"> 
          <div class="hero-body"> 
            <div class="container has-text-centered"> 
            <div className="container valign-wrapper">
            </div>
              </div> 
            </div> 
          </section>
            </div>
          </div>
        </section>
        <br/>
          <div className="row title welcomeContainer">
            <div className="col s12 center-align">
              <h4>
                {" "}
                <span style={{ fontFamily: "monospace" }}>WELCOME TO</span>
              </h4>
              <div class="beerHeader">
                <img src={logo} className={`logo`} alt='logo'/> 
              </div>
              <br/>
              <p className="flow-text" style={{ fontFamily: "monospace" }}>
                Please Log In or Register For an Account
              </p>
              <br />
              <div className="col s6">
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
              <div className="col s6">
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
          
        </div>
      
      
      </div>
    );
  }
}

export default Landing;
