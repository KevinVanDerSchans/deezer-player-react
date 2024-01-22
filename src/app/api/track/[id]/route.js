import { fetchTrack } from '../../../fetchers';

export async function GET(req, { params }) {
  try {
    const data = await fetchTrack(params.id);

    return Response.json(data);
  }
  catch(error) {
    throw error;
  }
}
