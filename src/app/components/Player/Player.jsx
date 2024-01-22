/* eslint-disable @next/next/no-img-element */
'use client';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdSkipPrevious, MdSkipNext, MdPlayArrow, MdPause, MdVolumeMute } from 'react-icons/md';
import { playNextSong, playPreviousSong, selectCurrentSong } from './../../redux/features/songsSlice';
import useWavesurfer from '../../hooks/useWavesurfer';
import { formatDuration } from '../../utils/formatters';
import VolumeSlider from './VolumeSlider';

const Player = () => {
  const dispatch = useDispatch();
  const waveContainerRef = useRef(null);
  const { album, title_short, artist, preview: audioSrc, duration } = useSelector(selectCurrentSong);
  const { handlePlayPause, isPlaying, setAudioVolume, audioVolume } = useWavesurfer(waveContainerRef, audioSrc, () => dispatch(playNextSong()));
  const formattedDuration = formatDuration(duration);

  return (
    <>
      <div className={ audioSrc ? 'player' : 'player disable' }>
        <div className='player-content'>

          <div className="song-data">
            <img className='song-album' src={ album?.cover_small } alt='Album cover' />

            <div className='song-details'>
              <span className='song-title'>{ title_short }</span>
              <span className='artist-name'>{ artist?.name }</span>
            </div>
          </div>

          <div className='control-buttons'>
            <div className="controls">

              <div className='buttons'>
                <button onClick={ () => dispatch(playPreviousSong()) } className='previous-button'>
                  <MdSkipPrevious />
                </button>

                <button
                  className='play-button'
                  onClick={ audioSrc && handlePlayPause }
                >
                  {
                    isPlaying ?
                      <MdPause /> :
                      <MdPlayArrow />
                  }
                </button>

                <button onClick={ () => dispatch(playNextSong()) } className='next-button'>
                  <MdSkipNext />
                </button>
              </div>

              <div className='wave'>
                <div className='wave-container' ref={ waveContainerRef }></div>
                <span className='duration'>{ formattedDuration }</span>
              </div>
            </div>
          </div>

          <div className='volume-section-container'>
            <div className='volume-slider-container'>
              <div className='volume'>

                <button
                  className='volume-button'
                  onClick={ () => setAudioVolume((prev) => ({ ...prev, isMuted: prev.value <= 0 ? true : ! prev.isMuted })) }>
                  {
                    audioVolume.isMuted
                      ? <MdVolumeMute />
                      : <img width={90} height={90} className='volume-icon' src='/assets/svg/volume.svg' alt='Change volume value' />
                  }
                </button>

                {
                  audioSrc &&
                    <VolumeSlider
                      className='volume-slider'
                      audioVolume={ audioVolume }
                      onChange={ ([ value ]) => { setAudioVolume({ isMuted: value <= 0 ? true : false, value }) } }
                    />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
