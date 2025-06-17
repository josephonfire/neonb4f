import React from 'react';
// Ensure the correct path to AlbumCard component
import './globals.css'; // Import global styles';
import Card from '../app/components/Card.jsx';
import AlbumCard from '../app/components/AlbumCard.jsx';
import MusicCard from '../app/components/MusicCard.jsx'// Ensure this path points to the correct location of the Card component
import PodcastCard from '../app/components/podcastCard.jsx'; // Ensure this path points to the correct location of the PodcastCard component
import NavBar from '../app/components/NavBar.jsx'; // Ensure this path points to the correct location of the NavBar component
import UserInfoBar from '../app/components/UserInfoBar.jsx';

function App() {
  return (
    <>
      <div><NavBar /></div>
      <div><Card /></div>
      <div><AlbumCard /></div>
      <div><MusicCard /></div>
      <div><PodcastCard /></div>
      <div><UserInfoBar /></div>
    </>
  )
};

export default App;