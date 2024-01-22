import Image from 'next/image';
import Link from 'next/link'

export default function ErrorPage() {
  return (
    <section className='not-found-page'>
      <div className='not-found-page-container'>
        <Image
          src='/assets/svg/404-error.svg'
          alt='Error page'
          width={180}
          height={180}
        />

        <h1 className='not-found-title'>Page not found</h1>
        <h2 className='not-found-description'>
          Return to
            <span className='not-found-link-home'><Link href="/">Home</Link></span>
        </h2>
      </div>
    </section>
  )
}
