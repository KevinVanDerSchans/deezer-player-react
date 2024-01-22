/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const LinkCardItem = ({ href, imgSrc, title }) => {
  return (
    <li className='track-list-item'>
      <div className='track-list-item-container artist'>

        <div className='trending-track-details'>
          <div className='trending-track-details-text'>
              <Link href={ href }>
                <img src={ imgSrc } alt="Artist image" className='trending-item-image' />
                <span className='favorite-artist-title'>{ title }</span>
              </Link>
            </div>
          </div>
      </div>
    </li>
  );
};

export default LinkCardItem;
