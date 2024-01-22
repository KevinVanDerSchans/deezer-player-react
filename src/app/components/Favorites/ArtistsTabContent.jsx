import useSWR from 'swr';
import LinkCardItem from './LinkCardItem';

const ArtistsTabContent = ({ header, artists }) => {
  const { data } = useSWR({ entitiesIds: artists, endpoint: '/api/artist' });

  return (
    <section className="trending-tracks">

      <div className='trending-tracks-header'>
        { !! header && <h1>{ header }</h1> }
      </div>

      <div className='trending-tracks-container'>

        <ul className='trending-tracks-list'>
          {
            data.map((artist => {
              const { id, name, picture_medium } = artist;

              return (
                <LinkCardItem
                  key={ id }
                  title={ name }
                  imgSrc= { picture_medium }
                  href={ `/artist/${ id }` }
                />
              );
            }))
          }
        </ul>
      </div>
    </section>
  );
};

export default ArtistsTabContent;
