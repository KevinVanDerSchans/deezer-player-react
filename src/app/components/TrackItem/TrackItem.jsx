/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { useDispatch } from 'react-redux';
import { playSong } from '../../redux/features/songsSlice';

const TrackListItem = ({ index, playlist, track: { title, artist, album, type } }) => {
  const dispatch = useDispatch();

  return (
    <li
      className='track-list-item'
      onClick={ () => dispatch(playSong({index, playlist})) }
    >
      <div className='track-list-item-container'>
        <img
          src={ album.cover_medium }
          alt=""
          className='trending-item-image'
          width={340}
          height={280}
        />

        <div className='trending-track-details'>
          <strong className='trending-track-details-title'>{ title }</strong>
          <span className='file-type'>{ artist.name }</span>
          <span className='file-type'>{ type }</span>
        </div>
      </div>
    </li>
  );
};

export default TrackListItem;
