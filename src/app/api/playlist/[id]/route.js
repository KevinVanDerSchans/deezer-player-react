import { fetchPlaylist } from "../../../fetchers";

export async function GET(req, { params }) {
  const data = await fetchPlaylist(params.id);

  return Response.json(data);
}
