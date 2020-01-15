import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import NavBarIn from "../NavBarIn/NavBarIn"

class Dashboard extends Component {


  onSearchClick = e => {
    e.preventDefault();
    
  }

  render() {
    const { user } = this.props.auth;

    return (
      <div class="background">
        <NavBarIn />
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
      <div className="container registerForm">
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into {" "}
                <span style={{ fontFamily: "monospace" }}>BEER HIKER</span>
              </p>
            </h4>
          
            <Link
                to="/beer"
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                className="btn btn-large waves-effect waves-light hoverable orange accent-3"
              >
                Search
              </Link>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);


