import React, { Component } from 'react';
import '../NavBar/NavBar.css';
import logo from '../../images/BeerHikerLogo2.jpg';


class NavBar extends Component {
    render () {
        return (
        <div className={`navBar`}>
            <div>
                <img src={logo} className={`logo`} alt='logo'/>  
            </div>
            <div className={`right`}>
                <button class="button is-primary has-text-weight-bold">User Profile</button>
                <button class="button is-black has-text-weight-bold">Logout</button>
            </div>
        </div>
        );
    }  
}; 

export default NavBar;