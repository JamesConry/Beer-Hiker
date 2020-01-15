import React, { Component } from "react";
import 'bulma/css/bulma.css'
import NavBarIn from "../NavBarIn/NavBarIn";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "../results/Results.css";


// import { Link } from "react-router-dom";

class Results extends Component {

  state = {
    user: this.props.auth,
    searchData: [],
    searchResults: [],
    toMap: []
  };
  

   componentDidMount() {
    
     this.loadUserData();     
    
  }

  loadUserData = () => {
    API.getSearchData(this.state.user.user.id)
      .then(res =>
        this.setUserState(res.data),
      ).then(()=>
        this.getBreweryData()
      )
      .catch(err => console.log(err));
  }

  getBreweryData = () => {
    API.getBreweries(this.state.searchData.search[0],this.state.searchData.search[1],this.state.searchData.search[2],this.state.searchData.search[3])
      .then(res =>
        this.setResultState(res.data),
      )
      .catch(err => console.log(err));
  }

  setUserState = (data) => {
    this.setState({searchData: data});
  }

  setResultState = (data) => {
    this.setState({searchResults: data})
  }

  onSearchClick = e => {
    // e.preventDefault();

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
          <form>
          <div className="container" >
            
          
          
            {/* <label className="checkbox">
              <input type="checkbox">Test</input>
            </label> */}
            

            {this.state.searchResults.length ? (
              // <List>
                this.state.searchResults.map(brew => (
                  // <ListItem key={brew._id}>
                  //   <Link to={"/brews/" + brew._id}>
                  //     <strong>
                  //       {brew.volumeInfo.title} by {brew.volumeInfo.authors}
                  //     </strong>
                  //   </Link>
                  //   {/* <DeleteBtn onClick={() => this.deletebrew(brew._id)} /> */}
                  //   <FormBtn onClick={() => this.handlebrewSave(brew)}>
                  //   Save brew
                  //   </FormBtn>
                  // </ListItem>
                  <div className="section" >
              <div className="card is-horizontal columns" >
                <div className="card-image column is-three-fifths" >

              

                  <div className="media-content">
                    <label className="containerCheck">
                      <input type="checkbox"/>
                      <span className="checkmark"></span>
                    </label>
                <p className="title is-4">{brew.name}</p>
                  </div>

                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. 
                  </div>
                </div>
              </div>
            </div>

                ))
              
            ) : (
              <h3>No Results to Display</h3>
            )}
            
            
            {/* <div className="section" >
              <div className="card is-horizontal columns" >
                <div className="card-image column is-three-fifths" >

              

                  <div className="media-content">
                    <label class="containerCheck">
                      <input type="checkbox"/>
                      <span class="checkmark"></span>
                    </label>
                    <p className="title is-4">Once upon a time there was a sailor</p>
                  </div>

                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. 
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          </form>
          <div className={`right`}>
            <Link to="/beer">
              <button className="button is-primary has-text-weight-bold">New Search</button>
            </Link>
            <Link to="/map">
              <button onClick={this.onSearchClick} className="button is-black has-text-weight-bold">Map</button>
            </Link>
            {/* <button onClick={this.onSearchClick} className="button is-black has-text-weight-bold">Testing</button> */}
          </div>
        </div>
      </div>


    );
  }
};


Results.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Results);
// export default Results;




