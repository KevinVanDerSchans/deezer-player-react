import React from 'react';
import TrackListItem from '../list-items/TrackListItem';

const TrackListContainer = ({ header, tracks }) => {
  return (
    <section className="trending-tracks">

      <div className='trending-tracks-header'>
        { !! header && <h2>{ header }</h2> }
      </div>

      <div className='trending-tracks-container'>
        <ul className='trending-tracks-list'>
          {
            tracks.map(( track, index ) =>
              <TrackListItem
                key={ track.id }
                index= { index }
                playlist={ tracks }
                track={ track }
              />
            )
          }
        </ul>
      </div>
    </section>
  )
}

export default TrackListContainer;
