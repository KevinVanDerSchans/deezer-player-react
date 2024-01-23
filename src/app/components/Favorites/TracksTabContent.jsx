import useSWR from 'swr';
import TrendingTracks from '../TrendingTracks/TrendingTracks';

const TracksTabContent = ({ tracks }) => {
  const { data } = useSWR({ entitiesIds: tracks, endpoint: '/api/track' })

  return (
    <div className='library-section'>
      <TrendingTracks tracks={ data } />
    </div>
  )
}

export default TracksTabContent;
