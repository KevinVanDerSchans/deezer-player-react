const TabContentContainer = ({ entities, children }) => {
  const isEmpty = ! entities.length;

  return (
    <>
      {
        isEmpty ?
          <div className="empty-list">
            <h2>Empty List !</h2>
            <h3>Explore the APP</h3>
          </div>
        :
        <>
          { children }
        </>
      }
    </>
  )
};

export default TabContentContainer;
