'use client';

export default function Error({ reset }) {
  return (
    <section className='error-page'>
      <div className="error-page-container">
        <p className="error-page-description">Errors might arise due to restrictions imposed on Deezer API requests.</p>

        <div className="error-page-button-container">
          <button
            onClick={ () => reset() }
            className="error-page-button"
            aria-label="Try again to reload the page"
          >
              Try again
          </button>
        </div>
      </div>
    </section>
  );
};
