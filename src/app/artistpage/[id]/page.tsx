"use client"
import React from 'react';
import '../artistpage.css'; // Import artist page styles
import NavBar from '../../components/NavBar';
import ArtistInfoBar from '../../components/ArtistInfoBar.jsx';
import ArtistInfoBar2 from '../../components/ArtistInfoBar2.jsx';
import ArtistInfoBar3 from '../../components/ArtistInfoBar3.jsx';
import PieChart from '../../components/PieChart.jsx';
import DonnutChart from '../../components/DonnutChart.jsx';
import MusicCard from '../../components/MusicCard.jsx';
import { Background } from "../../components/Background";

export default function ArtistPage({ params }: { params: { id: string } }) {
    const artistName = params.id.replaceAll("%20", " ");
    return (
        <Background>
            <div>
                <div><NavBar /></div>
                <div>
                    <div>
                        <img className='artist-profile-photo' src="/imgs/spoti-singer-icon.svg" alt="artist profile photo" /></div>
                    <h1 className='artist-name'>{artistName}</h1>
                </div>
                <div className='artist-position'>
                    <p>TOP #</p>
                </div>
                <div className='charts'>
                    <PieChart />
                    <DonnutChart />
                </div>
                <div className='artist-info-bar'>
                    <ArtistInfoBar />
                    <ArtistInfoBar2 />
                    <ArtistInfoBar3 />
                </div>

                <div className='cards'>
                    <h1 className='top-list'>TOP 20 Músicas</h1>
                    {Array.from({ length: 20 }).map((_, index) => (
                        <MusicCard key={index} />
                    ))}
                </div>

            </div>
        </Background>
    )
}