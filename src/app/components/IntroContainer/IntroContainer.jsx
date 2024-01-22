'use client';
import Image from 'next/image';
import { playSong } from "../../redux/features/songsSlice";
import FavoriteButton from "../Favorites/FavoriteButton";
import { useDispatch } from 'react-redux';

const IntroContainer = ({ id, imgSrc, title, description, playlist, type }) => {
  const dispatch = useDispatch();

  return (
    <div className='intro-container'>
      <Image src={ imgSrc } alt="Artist" className="artist-image" width={200} height={200}/>

      <div className='intro-details'>
        <span className="artist-name">{ title }</span>

        <div className='intro-buttons'>
          <button
            className='play-button'
            onClick={ () => dispatch(playSong({ playlist, index: 0 })) }
          >
            <span>Play</span>
          </button>

          <FavoriteButton type={ type } id={ id } className='artist-favorite-button' />
        </div>
      </div>
    </div>
  );
};

export default IntroContainer;
