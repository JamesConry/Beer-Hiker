import React, { Component } from "react";
import 'bulma/css/bulma.css'
import API from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions"
import NavBarIn from "../NavBarIn/NavBarIn";

class Beer extends Component {

  state = {
    user: this.props.auth,
    // search: ""
    // author: "",
    // synopsis: ""
  };

  // componentDidMount() {
  //   const { user } = this.props.auth;
  // }

  saveSearch = () => {
    let state = "Alabama";
    let city = "";
    let name = "";
    let type = "";
    let searchData = [state, city, name, type];
    API.saveSearch(searchData, this.state.user.user.id)
      .then(res => console.log(res));
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  onSearchClick = e => {
    e.preventDefault();
    
  };


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
          <div className="columns is-centered">
            <div className="column is-two-thirds">
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">City</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <input className="input" type="text" placeholder="City" id="city"/>
                    <p />
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">State</label>
                </div>
                <div className="field-body">
                  <div className="field is-wide">
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select id="state">
                          <option value />
                          <option value="Alabama">Alabama</option>
                          <option value="AK">Alaska</option>
                          <option value="AR">Arkansas</option>
                          <option value="AZ">Arizona</option>
                          <option value="CA">California</option>
                          <option value="CO">Colorado</option>
                          <option value="CT">Connecticut</option>
                          <option value="DE">Delaware</option>
                          <option value="DC">District of Columbia</option>
                          <option value="FL">Florida</option>
                          <option value="GA">Georgia</option>
                          <option value="HI">Hawaii</option>
                          <option value="ID">Idaho</option>
                          <option value="IL">Illinois</option>
                          <option value="IN">Indiana</option>
                          <option value="IA">Iowa</option>
                          <option value="KS">Kansas</option>
                          <option value="KY">Kentucky</option>
                          <option value="LA">Louisiana</option>
                          <option value="ME">Maine</option>
                          <option value="MD">Maryland</option>
                          <option value="MA">Massachusetts</option>
                          <option value="MI">Michigan</option>
                          <option value="MN">Minnesota</option>
                          <option value="MS">Mississippi</option>
                          <option value="MO">Missouri</option>
                          <option value="MT">Montana</option>
                          <option value="NE">Nebraska</option>
                          <option value="NV">Nevada</option>
                          <option value="NH">New Hampshire</option>
                          <option value="NJ">New Jersey</option>
                          <option value="NM">New Mexico</option>
                          <option value="NY">New York</option>
                          <option value="NC">North Carolina</option>
                          <option value="ND">North Dakota</option>
                          <option value="OH">Ohio</option>
                          <option value="OK">Oklahoma</option>
                          <option value="OR">Oregon</option>
                          <option value="PA">Pennsylvania</option>
                          <option value="PR">Puerto Rico</option>
                          <option value="RI">Rhode Island</option>
                          <option value="SC">South Carolina</option>
                          <option value="SD">South Dakota</option>
                          <option value="TN">Tennessee</option>
                          <option value="TX">Texas</option>
                          <option value="UT">Utah</option>
                          <option value="VT">Vermont</option>
                          <option value="VA">Virginia</option>
                          <option value="WA">Washington</option>
                          <option value="WV">West Virginia</option>
                          <option value="WI">Wisconsin</option>
                          <option value="WY">Wyoming</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Brewery Name</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <input className="input" type="text" placeholder="Optional" id="name"/>
                    <p />
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Brewery Type</label>
                </div>
                <div className="field-body">
                  <div className="field is-wide">
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select id="type">
                          <option value>Optional</option>
                          <option value="Pub">Pub</option>
                          <option value="Micro">Micro Brewery</option>
                          <option value="Bar">Bar</option>
                          <option value="Restaurant">Restaurant</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label">
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <button className="button is-primary" onClick = {this.saveSearch}>
                        <strong>Submit</strong>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      
      );
    }
  }

  Beer.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Beer);
  
  
  // export default Beer;
  
