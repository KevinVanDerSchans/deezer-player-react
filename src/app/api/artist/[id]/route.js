import { fetchArtist } from "../../../fetchers";

export async function GET(req, { params }) {
  const data = await fetchArtist(params.id);

  return Response.json(data);
}
