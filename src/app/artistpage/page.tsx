"use client";
import React from "react";
import { useParams } from "next/navigation";
import "./artistpage.css";
import NavBar from "../components/NavBar";
import ArtistInfoBar from "../components/ArtistInfoBar";
import ArtistInfoBar2 from "../components/ArtistInfoBar2";
import ArtistInfoBar3 from "../components/ArtistInfoBar3";
import PieChart from "../components/PieChart";
import DonnutChart from "../components/DonnutChart";
import MusicCard from "../components/MusicCard";
import { useTopArtists } from "../hooks/hooks";
import data from "../data/history.json";

export default function ArtistPage() {
  const params = useParams() as { id?: string | string[] };
  const artistNameParam = params.id;
  const artistName = decodeURIComponent(
    Array.isArray(artistNameParam)
      ? artistNameParam[0] ?? ""
      : artistNameParam ?? ""
  );
  const topArtists = useTopArtists(data);

  console.log(topArtists.map(a => a.artistName)) 

  // normalizacao do nome dos artistas
  const normalize = (str: string) =>
  str?.toLowerCase().normalize().trim();

  console.log("Busca artista", artistName); // testando
console.log("Artistas teste", topArtists.map(a => a.artistName)); // testando n funciona

const artistIndex = topArtists.findIndex(
  (artist) => normalize(artist.artistName) === normalize(artistName)
);


  const position = artistIndex >= 0 ? artistIndex + 1 : "-";
  const artistData = artistIndex >= 0 ? topArtists[artistIndex] : null; 

  console.log("Índice encontrado:", artistIndex);
console.log("Artista encontrado:", artistData);


  return (
    <>
      <NavBar />
      <div>
        <img
          className="artist-profile-photo"
          src="/imgs/spoti-singer-icon.svg"
          alt="artist profile photo"
        />
        <h1 className="artist-name">{artistName}</h1>
      </div>
      <div className="artist-position">
        <p>TOP #{position}</p>
      </div>
      <div>
        {artistData ? (
          <p>
            by<br />
            {Math.round(artistData.ms_total / 60000)} minutes played
          </p>
        ) : (
          <p>Artista não encontrado</p>
        )}
      </div>
      <div className="charts">
        <PieChart />
        <DonnutChart/>
      </div>
      <div className="artist-info-bar">
        <ArtistInfoBar />
        <ArtistInfoBar2 />
        <ArtistInfoBar3 />
      </div>
      <div className="cards">
        <h1 className="top-list">TOP 20 Músicas</h1>
        {Array.from({ length: 20 }).map((_, index) => (
          <MusicCard key={index} />
        ))}
      </div>
    </>
  );
}