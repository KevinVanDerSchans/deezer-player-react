import { notFound } from "next/navigation";

const base = 'https://api.deezer.com';

async function fetchData(endpoint) {
  const response = await fetch(base + endpoint);
  const data = await response.json();

  if(data.error?.code === 800) {
      return notFound();
  }
  return data;
}

export async function fetchTrack(id) {
  const endpoint = `/track/${ id }`;
  const data = await fetchData(endpoint);

  return data;
}

export async function fetchTopTracks({ limit = 10 } = {}) {
  const endpoint = `/chart/0/tracks?limit=${ limit }`;
  const { data } = await fetchData(endpoint);

  return data;
}
