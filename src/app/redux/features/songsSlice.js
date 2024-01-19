import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
  activeEntity: null
}

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {

  }
});

export const { playSongs } = songsSlice.actions;

export const selectCurrentSong = createSelector((state) => state.songs, (songs) => {
  return songs.entities[songs.activeEntity] || {}
});

export default songsSlice.reducer;
