import React from 'react';
import Image from 'next/image';

const Spinner = () => {
  return (
    <div className='spinner-container'>
      <Image src='assets/svg/spinner.svg' width={200} height={200} alt='Spinner' className='spinner'/>
    </div>
  );
};

export default Spinner;
