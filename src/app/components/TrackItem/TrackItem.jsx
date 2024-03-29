/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { playSong } from "../../redux/features/songsSlice";
import FavoriteButton from "../Favorites/FavoriteButton";

const TrackListItem = ({ index, playlist, track: { id, title, artist, album, type } }) => {
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    dispatch(playSong({ index, playlist }));

    setTimeout(() => {
      setIsPlaying(false);
    }, 1500);
  };

  return (
    <li
      className="track-list-item"
      aria-label={`Play the son ${title} by ${artist.name}`}
      onClick={handlePlayClick}
    >
      <img
        src={ album.cover_medium }
        alt={`${title} album cover`}
        className="trending-item-image"
        width={312}
        height={312}
        priority="true"
      />

      <div className={`play-icon ${isPlaying ? "playing" : ""}`} />

      <div className="trending-track-details">

        <div className="trending-track-details-text">
          <strong className="trending-track-details-title">{ title }</strong>
          <span className="file-type">{ artist.name }</span>
          <span className="file-type">{ type }</span>
        </div>

        <div className="favorite-button-container">
          <FavoriteButton id={ id } type={ type }/>
        </div>
      </div>
    </li>
  );
}

export default TrackListItem;
