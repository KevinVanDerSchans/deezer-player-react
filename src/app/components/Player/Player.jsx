'use client';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdSkipPrevious, MdSkipNext, MdPlayArrow, MdPause, MdVolumeUp, MdVolumeMute } from 'react-icons/md';
import { playNextSong, playPreviousSong, selectCurrentSong } from './../../redux/features/songsSlice';
import useWavesurfer from '../../hooks/useWavesurfer';

const Player = () => {
  const dispatch = useDispatch();
  const { album, title, artist, preview: audioSrc, duration } = useSelector(selectCurrentSong);

  const { handlePlayPause, isPlaying, setAudioVolume, audioVolume } =
    useWavesurfer(waveContainerRef, audioSrc, () =>
      dispatch(playNextSong()));

  return (
    <>

    </>
  )
}

export default Player;
