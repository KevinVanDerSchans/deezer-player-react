"use client";
import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { playSong } from "../../redux/features/songsSlice";
import FavoriteButton from "../Favorites/FavoriteButton";

const TopSongsItem = ({ index, playlist, track: { id, title, artist, album, type } }) => {
  const dispatch = useDispatch();

  return (
    <li
      className="track-list-item"
      onClick={ () => dispatch(playSong({index, playlist})) }
      role="button"
      aria-label={`Play ${title} by ${artist.name}`}
    >
      <div className="track-list-item-container">
        <Image
          src={ album.cover_medium }
          alt={`${title} by ${artist.name}`}
          className="trending-item-image"
          width={340}
          height={280}
        />

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
      </div>
    </li>
  );
}

export default TopSongsItem;
