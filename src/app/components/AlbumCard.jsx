"use client";
import React from 'react';
import "../css/albumCard.css";

function AlbumCard(props) {
    return (
        <div className="aCard1">
            <img
                src="/imgs/spoti-albums-icon.svg"
                alt="album"
                className="card-img"
            />
            <div className="card-text">
                <p># 1{props.position}</p>
                <h3>Primeiro Album da Elizabetch e os dois papagaios{props.artistName}</h3>
            </div>
        </div>
    );
}

export default AlbumCard;