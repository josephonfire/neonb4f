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
                    <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
                        <li onClick={removeActive}>
                            <a href='#home' className={`${styles.navLink}`} ><img src="/imgs/spoti-logo.svg" alt="Home-Logo" className="icon" /></a>
                        </li>
                        <li onClick={removeActive}>
                            <a href='#home' className={`${styles.navLink}`}><img src="/imgs/spoti-singer-icon.svg" alt="Home-Logo" className="icon" /></a>
                        </li>
                        <li onClick={removeActive}>
                            <a href='#home' className={`${styles.navLink}`}>
                                <img src="/imgs/spoti-musics-icon.svg" alt="Home-Logo" className="icon" /></a>
                        </li>
                        <li onClick={removeActive}>
                            <a href='#home' className="icon">
                                <img src="/imgs/spoti-albums-icon.svg" alt="Home-Logo" className="icon" /></a>
                        </li>
                        <li onClick={removeActive}>
                            <a href='#home' className={`${styles.navLink}`}>
                                <img src="/imgs/spoti-podcasts-icon.svg" alt="Home-Logo" className="icon" /></a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div >
    );
}
export default Navbar;
;