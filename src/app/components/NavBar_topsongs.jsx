"use client";
import react, { useState } from 'react';
import React from 'react';
import styles from '../../css/navbar.css';
import { useRouter } from 'next/navigation';




function Navbar() {
    // adding the states 
    const [isActive, setIsActive] = useState(false);
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
                            <a href='/dashboard' className={`${styles.navLink}`} >
                                <img src="/imgs/spoti-logo.svg" alt="Home-Logo" className="icon" /></a>
                        </li>
                        <li onClick={removeActive}>
                            <a href='/top100artists' className={`${styles.navLink}`}>
                                <img src="/imgs/spoti-singer-icon.svg" alt="artists" className="icon" /></a>
                        </li>
                        <li className="icon1" onClick={removeActive}>
                            <a href='/top100songs' className={`${styles.navLink}`}>
                                <img src="/imgs/spoti-musics-icon.svg" alt="musics" className="icon" /></a>
                        </li>
                        <li onClick={removeActive}>
                            <a href='/top100albums' className={`${styles.navLink}`}>
                                <img src="/imgs/spoti-albums-icon.svg" alt="albums" className="icon" /></a>
                        </li>
                        {/* <li onClick={removeActive}>
                            <a href='/top100podcasts' className={`${styles.navLink}`}>
                                <img src="/imgs/spoti-podcasts-icon.svg" alt="podcasts" className="icon" /></a>
                        </li> */}
                    </ul>
                </nav>
            </header>
        </div >
    );
}

export default Navbar;
