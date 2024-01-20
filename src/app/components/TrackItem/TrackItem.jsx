'use-client';
import Link from 'next/link';
import Image from 'next/image'
import { useDispatch } from 'react-redux';
import { playSong } from '../../redux/features/songsSlice';

const TrackItem = ({ index, playlist, track: { id, title, duration, artist, album, type } }) => {

  return (
    <li
      className='track-list-item'

    >

      <div className='track-list-item-container'>
        <Image
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
            { artist.name }
          </Link>

          <span className='trending-track-more-details'>{ album.title }</span>
        </div>
      </div>
    </li>
  );
};

export default TrackItem;
