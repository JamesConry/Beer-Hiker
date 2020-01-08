import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css'

class Beer extends Component {
    render() {
      return (
        
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
                    <input className="input" type="text" placeholder="City" />
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
                        <select>
                          <option value />
                          <option value="AL">Alabama</option>
                          <option value="AK">Alaska</option>
                          <option value="AR">Arkansas</option>
                          <option value="AZ">Arizona</option>
                          <option value="CA">California</option>w
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
                    <input className="input" type="text" placeholder="Optional" />
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
                        <select>
                          <option value>Optional</option>
                          <option value="Pub">Pub</option>
                          <option value="Micro">Micro Brewery</option>
                          <option value="Bar">Bar</option>
                          <option value="Rest">Restaurant</option>
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
                      <button className="button is-primary">
                        <strong>Submit</strong>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
                to="/dashboard"
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Home
              </Link>
        </div>
        
      
      );
    }
  }
  
  export default Beer;
  
