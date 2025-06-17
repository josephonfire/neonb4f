"use client";
import react, { useState } from 'react';
import React from 'react';
import styles from '../navbar.css';

function Navbar() {
    // adding the states 
    const [isActive, setIsActive] = react.useState(false);
    //add the active class
    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };
    //clean up function to remove the active class
    const removeActive = () => {
        setIsActive(false)
    }
    return (
        <div className="App">
            <header className="App-header">
                <nav className={`${styles.navbar}`}>
                    {/* logo */}
                    <a href='#home' className={`${styles.logo}`}>
                        <img src=".src/app/imgs/spoti-logo.svg" alt="logo" className={`${styles.icon}`}/>Home</a>
                    <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
                        <li onClick={removeActive}>
                            <a href='#home' className={`${styles.navLink}`}>Artist</a>
                        </li>
                        <li onClick={removeActive}>
                            <a href='#home' className={`${styles.navLink}`}>Songs</a>
                        </li>
                        <li onClick={removeActive}>
                            <a href='#home' className={`${styles.navLink}`}>Albuns</a>
                        </li>
                        <li onClick={removeActive}>
                            <a href='#home' className={`${styles.navLink}`}>Podcasts</a>
                        </li>
                    </ul>

                </nav>
            </header>
        </div >
    );
}
export default Navbar;
;