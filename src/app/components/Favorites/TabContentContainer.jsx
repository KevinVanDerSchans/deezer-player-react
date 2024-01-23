const TabContentContainer = ({ entities, children }) => {
  const isEmpty = ! entities.length;

  return (
    <>
      {
        isEmpty ?
          <section className="empty-list-section">
            <div className="empty-list-container">
              <h2 className="empty-list-title">Empty favorites !</h2>
              <h3 className="empty-list-description">
                Browse the <strong>APP</strong> and search for your favorite <strong>songs</strong> !
              </h3>
            </div>
          </section>
        :
        <>
          { children }
        </>
      }
    </>
  )
};

export default TabContentContainer;
