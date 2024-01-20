import TrackItem from '../TrackItem/TrackItem';

const TrendingTracks = ({ header, tracks }) => {
  return (
    <section className="trending-tracks">

      <div className='trending-tracks-header'>
        { !! header && <h1>{ header }</h1> }
      </div>

      <div className='trending-tracks-container'>
        <ul className='trending-tracks-list'>
          {
            tracks.map(( track, index) =>
              <TrackItem
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

export default TrendingTracks;
