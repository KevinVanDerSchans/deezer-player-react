import { fetchAlbum } from "../../../fetchers";

export async function GET(req, { params }) {
  const data = await fetchAlbum(params.id);

  return Response.json(data);
}
