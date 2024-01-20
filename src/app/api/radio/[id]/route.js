import { fetchRadio } from "../../../fetchers";

export async function GET(req, { params }) {
  const data = await fetchRadio(params.id);

  return Response.json(data);
}
