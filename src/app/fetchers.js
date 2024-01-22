import { notFound } from "next/navigation";

const base = process.env.NEXT_PUBLIC_API_BASE_URL;


async function fetchData(endpoint) {
  try {
    const response = await fetch(base + endpoint);

    if(!response.ok) {
      throw new Error(`Error in server response: ${response.status}`);
    }
    const data = await response.json();

    if (data.error?.code === 800) {
      return notFound();
    }
    return data;

  } catch (error) {
    throw error;
  };
};

export async function fetchTrack(id) {
  try {
    const endpoint = `/track/${ id }`;
    const data = await fetchData(endpoint);

    return data;

  } catch (error) {
    throw new Error(`Error getting track: ${error.message}`)
  }
}

export async function fetchTopTracks({ limit = 10 } = {}) {
  try {
    const endpoint = `/chart/0/tracks?limit=${ limit }`;
    const { data } = await fetchData(endpoint);

    return data;

  } catch (error) {
    throw new Error(`Error getting top tracks: ${error.message}`)
  }
}

export async function fetchArtist(id) {
  try {
    const endpoint = `/artist/${ id }`;
    const data = await fetchData(endpoint);

    return data;

  } catch {
    throw new Error(`Error getting artist: ${error.message}`);
  }
}

export async function fetchArtistTopTracks(id) {
  try {
    const endpoint = `/artist/${ id }/top`;
    const { data } = await fetchData(endpoint);

    return data;

  } catch (error) {
    throw new Error(`Error getting the best tracks of the artist: ${error.message}`);
  }
}

export async function fetchSearchData(query, { limit = 3 } = {}) {
  try {
    const endpoint = (category) => `/search/${ category }?q=${ query }&limit=${ limit }`;

    const tracksPromise = fetchData(endpoint('track'));
    const artistsPromise = fetchData(endpoint('artist'));

    return await Promise.all([tracksPromise, artistsPromise]);

  } catch (error) {
    throw new Error(`Error while performing the search: ${error.message}`);
  }
}
