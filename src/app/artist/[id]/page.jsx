import { fetchArtist, fetchArtistTopTracks } from "../../fetchers";
import IntroContainer from "../../components/IntroContainer/IntroContainer";
import TopSongs from "../../components/TopSongs/TopSongs";

const ArtistPage = async ({ params: { id } }) => {
  try {
    const artistPromise = fetchArtist(id);
    const topTracksPromise = fetchArtistTopTracks(id);

    const [artist, topTracks] = await Promise.all([artistPromise, topTracksPromise]);

    return (
      <section className="artist-container">
        <div className="artist-data">
          <h1 className="artist-results">
            Search results for: <span className="artist-name">{ artist.name}</span>
          </h1>

          <div className="artist-top-songs-container">
            <TopSongs header="Top Songs" tracks={ topTracks } />
          </div>

          <div className="artist">
            <IntroContainer
              id={ id }
              type={ artist.type }
              title={ artist.name }
              imgSrc={ artist.picture_medium }
              playlist={ topTracks }
            />
          </div>
        </div>
      </section>
    );

  } catch(error) {
    throw error;
  };
}

export default ArtistPage;
