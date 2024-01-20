/* eslint-disable @next/next/no-img-element */
'use-client';
import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { playSong } from '../../redux/features/songsSlice';

const TrackListItem = ({ index, playlist, track: { id, title, duration, artist, album, type } }) => {

  {/*   const dispatch = useDispatch(); */}

  return (
    <li
      className='track-list-item'

    >
    {/*   onClick={ () => dispatch(playSong({index, playlist})) }; */ }
      <div className='track-list-item-container'>
        <img
          src={ album.cover_medium }
          alt="Album cover"
          width={340}
          height={280}
          className='trending-item-image'
        />

        <div className='trending-track-details'>
          <strong className='trending-track-details-title'>{ title }</strong>

          <Link
            href={ `/artist/${ artist.id }` }
            className='trending-track-more-details'

          >
          {/*   onClick={ (e) => e.stopPropagation() }; */}

            { artist.name }
          </Link>

          {/* <span className='trending-track-more-details'>{ album.title }</span> */}
        </div>
      </div>
    </li>
  );
};

export default TrackListItem;
