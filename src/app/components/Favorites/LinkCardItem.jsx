import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LinkCardItem = ({ href, imgSrc, title, description }) => {
  return (
    <li className='card-container'>
      <Link href={ href }>
        <Image
          src={ imgSrc }
          alt="Artist"
          width={200}
          height={200}
        />
        <strong>{ title }</strong>

        {
          description &&
            <small>{ description }</small>
        }
      </Link>
    </li>
  );
};

export default LinkCardItem;
