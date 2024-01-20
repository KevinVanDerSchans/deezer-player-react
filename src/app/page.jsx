import TrackListContainer from "../app/components/others/TrackListContainer";
import { fetchTopTracks } from "../app/fetchers";

export default async function Home() {
  const tracks = await fetchTopTracks({ limit: 20 })

  return (
    <div>
      <TrackListContainer
        header="Trending hits:"
        tracks={ tracks }
      />

    </div>
  );
}
