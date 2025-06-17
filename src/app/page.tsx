import React from 'react';
import './globals.css'; // Import global styles';
import Card from '../app/components/Card.jsx';
import AlbumCard from '../app/components/AlbumCard.jsx';
import MusicCard from '../app/components/MusicCard.jsx'
import PodcastCard from '../app/components/podcastCard.jsx'; 
import NavBar from '../app/components/NavBar.jsx'; 
import UserInfoBar from '../app/components/UserInfoBar.jsx';
import UserInfoBar2 from '../app/components/UserInfoBar2.jsx';
import UserInfoBar3 from '../app/components/UserInfoBar3.jsx';
import ArtistInfoBar from '../app/components/ArtistInfoBar.jsx';
import ArtistInfoBar2 from '../app/components/ArtistInfoBar2.jsx';
import ArtistInfoBar3 from '../app/components/ArtistInfoBar3.jsx';
import PieChart from '../app/components/PieChart.jsx'

function App() {
  return (
    <>
      <div><NavBar /></div>
      <div><Card /></div>
      <div><AlbumCard /></div>
      <div><MusicCard /></div>
      <div><PodcastCard /></div>
      <br />
      <p>componente do perfil do utilizador</p>
      <div><UserInfoBar /></div>
      <div><UserInfoBar2 /></div>
      <div><UserInfoBar3 /></div>
      <br />
      <p>componente do perfil do artista</p>
      <div><ArtistInfoBar/></div>
      <div><ArtistInfoBar2/></div>
      <div><ArtistInfoBar3/></div>
      <br />
      <p>pie charts</p>
      <div><PieChart/></div>
    </>
  )
};

export default App;