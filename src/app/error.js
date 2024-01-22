'use client';

export default function Error({ reset }) {
  return (
    <div className='error-page'>
      <div className="error-page-container">
        <p className="error-page-description">Errors might arise due to restrictions imposed on Deezer API requests.</p>

        <div className="error-page-button-container">
          <button
            onClick={ () => reset() }
            className="error-page-button"
          >
              Try again
          </button>
        </div>
      </div>
    </div>
  );
};
