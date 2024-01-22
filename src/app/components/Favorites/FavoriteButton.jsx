'use client';
import {
  addToFavorites,
  removeFromFavorites,
  selectFavorites
} from "@/app/redux/features/favoritesSlice";
import { useDispatch, useSelector } from 'react-redux';
import { FcLike } from "react-icons/fc";
import { PiHeartFill } from "react-icons/pi";
import Swal from 'sweetalert2';

const FavoriteButton = ({ type, id }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites[type].find(favoriteId => favoriteId === id);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();

    isFavorite
      ? dispatch(removeFromFavorites({ type, id }))
      : dispatch(addToFavorites({ type, id }));

      Swal.fire({
        position: "bottom-end",
        icon: "info",
        iconColor: '#000033',
        color: '#000000',
        title: "Library updated",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          container: 'custom-swal-container',
        },
        didOpen: () => {
          Swal.getPopup().style.background = 'linear-gradient(to bottom, #e7969f, #EF5466)';
          Swal.getTitle().style.fontSize = '1.2rem';
        }
      })
  };

  return (
    <button
      className={ isFavorite ? `favorite active` : 'favorite' }
      onClick={ handleFavoriteClick }
    >
    {isFavorite
      ? <span className="favorite-icon"><FcLike /></span>
      : <span className="favorite-icon"><PiHeartFill /></span>
    }
    </button>
  )
};

export default FavoriteButton;
