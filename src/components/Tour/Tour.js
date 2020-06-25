import React, { useState } from 'react';
import './tour.scss';

const Tour = ({ tour, removeTour }) => {
  const { id, city, img, name, info } = tour;
  const [showInfo, setShowInfo] = useState(false);

  const handleInfo = () => {
    setShowInfo(!showInfo);
  };

  const removeTourHandle = () => {
    removeTour(id);
  }

  return (
    <article className="tour">
      <div className="img-container">
        <img src={img} alt={name} />
        <span className="close-btn">
          <i className="fas fa-window-close" onClick={removeTourHandle}></i>
        </span>
      </div>
      <div className="tour-info">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info{''}
          <span>
            <i className="fas fa-caret-square-down" onClick={handleInfo}></i>
          </span>
        </h5>
        {showInfo && <p>{info}</p>}
      </div>
    </article>
  );
};

export default Tour;
