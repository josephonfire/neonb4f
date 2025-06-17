import React from 'react';
// Ensure the correct path to AlbumCard component
import './globals.css'; // Import global styles';
import Card from '../app/components/Card.jsx';
import AlbumCard from '../app/components/AlbumCard.jsx';// Ensure this path points to the correct location of the Card component

function App() {
  return (
    <>
      <div><Card /></div>
      <div><AlbumCard /></div>
    </>
  );
}

export default App;