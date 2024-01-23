'use client';
import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { playSong } from '../../redux/features/songsSlice';
import FavoriteButton from '../Favorites/FavoriteButton';

const TrackListItem = ({ index, playlist, track: { id, title, artist, album, type } }) => {
  const dispatch = useDispatch();

  return (
    <li
      className='track-list-item'
      onClick={ () => dispatch(playSong({index, playlist})) }
    >

      <Image
        src={ album.cover_medium }
        alt=""
        className='trending-item-image'
        width={312}
        height={312}
      />

      <div className='play-icon'></div>

      <div className='trending-track-details'>

        <div className='trending-track-details-text'>
          <strong className='trending-track-details-title'>{ title }</strong>
          <span className='file-type'>{ artist.name }</span>
          <span className='file-type'>{ type }</span>
        </div>

        <div className='favorite-button-container'>
          <FavoriteButton id={ id } type={ type }/>
        </div>
      </div>
    </li>
  );
};

export default TrackListItem;
