'use client';
import {
  addToFavorites,
  removeFromFavorites,
  selectFavorites
} from "@/app/redux/features/favoritesSlice";
import { useDispatch, useSelector } from 'react-redux';
import { FcLike } from "react-icons/fc";
import { PiHeartFill } from "react-icons/pi";

const FavoriteButton = ({ type, id }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites[type].find(favoriteId => favoriteId === id);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();

    isFavorite
      ? dispatch(removeFromFavorites({ type, id }))
      : dispatch(addToFavorites({ type, id }));
  };

  return (
    <button
      className={ isFavorite ? `favorite active` : 'favorite' }
      onClick={ handleFavoriteClick }
    >
      { isFavorite ? <FcLike /> : <PiHeartFill />}
    </button>
  )
};

export default FavoriteButton;
