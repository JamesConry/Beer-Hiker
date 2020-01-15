import React, { Component } from "react";
import 'bulma/css/bulma.css';
import { Link } from "react-router-dom";
import NavBarIn from "../NavBarIn/NavBarIn";
import API from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions"

class Map extends Component {
  state = {
    user: this.props.auth,
    toMap: [],
    toSave: []
  };

  componentDidMount() {
  this.loadMapData();     
 }

 loadMapData = () => {
   API.getSearchData(this.state.user.user.id)
     .then(res =>
       this.setUserState(res.data),
     ).then(()=>
       this.loadMap()
     )
     .catch(err => console.log(err));
 }

 setUserState = (data) => {
  this.setState({toMap: data});
}

loadMap = () => {
  //for putting in the map on page
  console.log(this.state.toMap)
}



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
            {this.state.toMap.length ? (
              this.state.toMap.map(brew => (
                console.log("holder")
               ))
              ) : (
                <h3>No Results to Display</h3>
              )}
            </div>
            <div className={`right`}>
              <Link to="/beer">
                <button className="button is-primary has-text-weight-bold">New Search</button>
              </Link>
              <Link to="/map">
                <button className="button is-black has-text-weight-bold">Save Breweries</button>
              </Link>
            </div>
          </div>
        </div>

      );
    }
  };

  Map.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Map);
  
  // export default Map;
  
  
  
  
  