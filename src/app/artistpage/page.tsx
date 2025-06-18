//pag artista

import React from 'react';
import './artistpage.css'; // Import artist page styles
import NavBar from '../components/NavBar';
import ArtistInfoBar from '../components/ArtistInfoBar.jsx';
import ArtistInfoBar2 from '../components/ArtistInfoBar2.jsx';
import ArtistInfoBar3 from '../components/ArtistInfoBar3.jsx';
import PieChart from '../components/PieChart.jsx';
import DonnutChart from '../components/DonnutChart.jsx';
import MusicCard from '../components/MusicCard.jsx';


function App(props: { artistName: string; position: number }) {
    return (
        <>
            <div><NavBar /></div>
            <div>
                <div>
                    <img className='artist-profile-photo' src="/imgs/spoti-singer-icon.svg" alt="artist profile photo" /></div>
                <h1 className='artist-name'>fhgihdfksdi{props.artistName}</h1>
            </div>
            <div className='artist-position'>
                <p>TOP #{props.position}</p>
            </div>
            <div className='charts'>
                <PieChart />
                <DonnutChart />
            </div>
            <div className='artist-info-bar'>
                <ArtistInfoBar />
                <ArtistInfoBar2 />
                <ArtistInfoBar3 /></div>
            <div className='cards'>

                <MusicCard />
            </div>


        </>
    )
}

export default App
