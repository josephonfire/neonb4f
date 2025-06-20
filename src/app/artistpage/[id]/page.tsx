"use client";
import React from 'react';
import { useParams } from "next/navigation";
import ArtistInfoBar from '../../components/ArtistInfoBar.jsx';
import ArtistInfoBar2 from '../../components/ArtistInfoBar2.jsx';
import ArtistInfoBar3 from '../../components/ArtistInfoBar3.jsx';
import PieChart from '../../components/PieChart.jsx';
import DonnutChart from '../../components/DonnutChart.jsx';
import MusicCard from '../../components/MusicCard.jsx';
import { useTopArtists } from "../../hooks/hooks";
import data from "../../data/history.json";
import { Background } from "../../components/Background";
import NavBar_topartist from '../../components/NavBar_topartist.jsx';
import "../artistpage.css";

export default function ArtistPage() {
    const params = useParams() as { id?: string };
    const artistName = decodeURIComponent(params.id ?? "");
    const topArtists = useTopArtists(data);

    // tentei normalizar e colocar todas em lower case talvez seria isso ( nao muda nada )
    const normalize = (str: string) =>
        str?.toLowerCase().normalize().trim();

    const artistIndex = topArtists.findIndex(
        (artist) => normalize(artist.artistName) === normalize(artistName)
    );
    const position = artistIndex >= 0 ? artistIndex + 1 : '-';
    const artistData = artistIndex >= 0 ? topArtists[artistIndex] : null; // tava dando 0 tive que colocar null pra dar 1

    return (
        <Background>
            <div>
                <div><NavBar_topartist /></div>
                <div>
                    <div className='pf-photo-div' >
                        <img src="/imgs/spoti-singer-icon.svg" alt="artist profile photo" className='artist-profile-photo' />
                    </div>

                    <div className='arti-name-div'>
                        <h1 className='artist-name'>{artistName}</h1></div>
                </div>

                <div className='artist-position'>
                    <p>TOP #{position}</p>
                </div>
                <div>
                   
                </div>
                <div className='charts'>
                    <PieChart />
                    <DonnutChart />
                </div>
                <div className='artist-info-bar'>
                    <ArtistInfoBar />
                    <ArtistInfoBar2 />
                    <ArtistInfoBar3 artistData={Math.round(artistData.ms_total / 60000)}/>
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