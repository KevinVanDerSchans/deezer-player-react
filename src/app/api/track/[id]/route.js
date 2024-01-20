import { fetchTrack } from "../../../fetchers";

export async function GET(req, { params }) {
  const data = await fetchTrack(params.id);

  return Response.json(data);
}
