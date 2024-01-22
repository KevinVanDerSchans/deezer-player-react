import { fetchArtist } from "../../../fetchers";

export async function GET(req, { params }) {
  try {
    const data = await fetchArtist(params.id);
    return Response.json(data);

  } catch (error) {
    throw error;
  }
}
