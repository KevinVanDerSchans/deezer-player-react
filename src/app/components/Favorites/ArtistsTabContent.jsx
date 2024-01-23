import useSWR from 'swr';
import LinkCardItem from './LinkCardItem';

const ArtistsTabContent = ({ artists }) => {
  const { data } = useSWR({ entitiesIds: artists, endpoint: '/api/artist' });

  return (
    <section className='favorite-artist-section'>
      <div className='favorite-artist-container'>
        <ul className='favorite-artist-list'>
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
