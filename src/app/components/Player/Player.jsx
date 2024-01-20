'use client';
import Image from "next/image";
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdSkipPrevious, MdSkipNext, MdPlayArrow, MdPause, MdVolumeUp, MdVolumeMute } from 'react-icons/md';
import { playNextSong, playPreviousSong, selectCurrentSong } from './../../redux/features/songsSlice';
import useWavesurfer from '../../hooks/useWavesurfer';
import VolumeSlider from './VolumeSlider'

const Player = () => {
  const dispatch = useDispatch();
  const waveContainerRef = useRef(null);
  const { album, title, artist, preview: audioSrc, duration } = useSelector(selectCurrentSong);

  const { handlePlayPause, isPlaying, setAudioVolume, audioVolume } =
    useWavesurfer(waveContainerRef, audioSrc, () =>
      dispatch(playNextSong()));

  return (
    <>
      <div className={ audioSrc ? 'player' : 'player disable' }>

        <div className="song-data">
          <Image src={ album?.cover_medium } alt='Album cover' width={80} height={80}/>

          <div className='song-details'>
            <span className='song-title overflowing-text'>{ title }</span>
            <span className='artist-name'>{ artist?.name }</span>
          </div>
        </div>


        <div className='control-buttons'>
          <button onClick={ () => dispatch(playPreviousSong()) }>
              <MdSkipPrevious />
          </button>

          <button
            className='play-pause-btn'
            onClick={ audioSrc && handlePlayPause }
          >
            {
              isPlaying ?
                <MdPause /> :
                <MdPlayArrow />
            }
          </button>

          <button onClick={ () => dispatch(playNextSong()) }>
            <MdSkipNext />
          </button>
        </div>

        <div className='wave-container' ref={ waveContainerRef }></div>

        { /* <span className='duration'>{ formattedDuration }</span> */ }

        <div className='volume-slider-container'>
          <button onClick={ () => setAudioVolume((prev) => ({ ...prev, isMuted: prev.value <= 0 ? true : ! prev.isMuted })) }>
            {
              audioVolume.isMuted ? <MdVolumeMute /> : <MdVolumeUp />
            }
          </button>

          {
            audioSrc &&
              <VolumeSlider
                audioVolume={ audioVolume }
                onChange={ ([ value ]) => { setAudioVolume({ isMuted: value <= 0 ? true : false, value }) } }
              />
          }
        </div>
      </div>
    </>
  );
};

export default Player;
