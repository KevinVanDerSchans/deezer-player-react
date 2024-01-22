'use client';
import Image from 'next/image';

const UnderConstruction = () => {
  return(
    <section className="under-construction-section">
      <div className="under-construction-container">
        <Image
          src="/assets/svg/under-construction.svg"
          alt="Page under construction"
          width={180}
          height={180}
        />

        <h1 className='under-construction-title'>Under construction !</h1>
        <h2 className='under-construction-developers'>Our developers are working on it.</h2>
        <h3 className='under-construction-apologize'>We apologize for any inconvenience.</h3>
      </div>
    </section>
  )
}

export default UnderConstruction;
