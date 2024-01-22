import { fetchSearchData } from '../../fetchers';

export async function GET(req) {
  const query = req.nextUrl.searchParams.get("q");
  const [tracks, artists] = await fetchSearchData(query)

  return Response.json({
    track: tracks.data,
    artist: artists.data,
  });
}
