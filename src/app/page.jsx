import TrendingTracks from "../app/components/TrendingTracks/TrendingTracks";
import { fetchTopTracks } from "../app/fetchers";

export default async function Home() {
  const tracks = await fetchTopTracks({ limit: 12 })

  return (
    <main>
      <TrendingTracks
        header="Trending hits:"
        tracks={ tracks }
      />
    </main>
  );
}
