import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LinkCardItem = ({ href, imgSrc, title, description }) => {
  return (
    <li className='artist-card-item'>

      <Link href={ href }>
        <div className='artist-card'>
          <Image
            src={ imgSrc }
            className='artist-image'
            alt="Artist"
            width={200}
            height={200}
          />

          <span className='artist-title'>{ title }</span>
        </div>
      </Link>
    </li>
  );
};

export default LinkCardItem;
