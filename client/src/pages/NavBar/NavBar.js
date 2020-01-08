import React from 'react';
import styles from './NavBar.css';
import logo from '../../images/BeerHikerLogo2.jpg';


export function NavBar() {
    return (
        <div className={styles['navBar']}>
            <div>
                <img src={logo} className={styles.logo} alt='logo'/>  
            </div>
            <div className={styles.right}>
                <a class="button is-primary has-text-weight-bold">User Profile</a>
                <a class="button is-black has-text-weight-bold">Logout</a>
            </div>
        </div>
    );
}