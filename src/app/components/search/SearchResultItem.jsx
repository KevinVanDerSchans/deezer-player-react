'use client';
import Image from 'next/image';
import { useState } from 'react';
import { playSong} from '../../redux/features/songsSlice';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

const SearchResultItem = ({ type, result }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(true);
  const { id, name, title, picture_medium, md5_image } = result;

  const handleClick = () => {

    if (type === 'track') {
      dispatch(playSong({ playlist: [result], index: 0 }));

    } else {
      router.push(`/${type}/${id}`);
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <li
      onClick={handleClick}
      className='search-list-item'
      role="button"
      aria-label={`Select ${name || title}`}
    >
      <Image
        className='search-image'
        src={
          picture_medium || `https://e-cdns-images.dzcdn.net/images/artist/${ md5_image }/1000x1000-000000-80-0-0.jpg`
        }
        alt={ title || name }
        width={200}
        height={200}
      />

      <span className='overflowing-text'>{ name || title }</span>
    </li>
  )
}

export default SearchResultItem;
