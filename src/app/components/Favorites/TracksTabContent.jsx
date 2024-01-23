import useSWR from 'swr';
import TrendingTracks from '../TrendingTracks/TrendingTracks';

const TracksTabContent = ({ tracks }) => {
  const { data } = useSWR({ entitiesIds: tracks, endpoint: '/api/track' })

  return (
    <section className='library-section'>
      <TrendingTracks tracks={ data } />
    </section>
  )
}

export default TracksTabContent;
