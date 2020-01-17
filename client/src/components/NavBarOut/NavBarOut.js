import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../NavBarOut/NavBarOut.css';
import logo from '../../images/BeerHikerLogo2.jpg';


class NavBarOut extends Component {
    render () {
        return (
        <div className={`navBar`}>
            <div>
                <Link to="/">
                <img src={logo} className={`logo`} alt='logo'/>  
                </Link>
            </div>
            
            <div className={`right`}>
            <p className="loginText">Please Log In or Register For an Account</p>
                <Link to="/register">
                <button className="button is-warning hoverable has-text-weight-bold">Register</button>
                </Link>
                <Link to="/login">
                <button className="button is-warning hoverable has-text-weight-bold">Log In</button>
                </Link>
            </div>
        </div>
        );
    }  
}; 

export default NavBarOut;