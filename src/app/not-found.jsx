import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='not-found-page'>
        <h2 className='error-title'>Error page</h2>
        <small className='error-description'>The link you followed may be broken, or the page may have been removed</small>

      <Link href="/">View Home Page</Link>
    </div>
  );
};
