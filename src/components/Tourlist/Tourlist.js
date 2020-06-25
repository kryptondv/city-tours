import React, { useState } from 'react';
import './tourlist.scss';
import Tour from '../Tour/Tour';
import './tourlist.scss';
import { tourData } from '../../tourData';

const Tourlist = () => {
  const [tours, setTours] = useState(tourData);
  console.log(tours);

  const removeTour = id => {
    setTours(tours.filter(tour => tour.id !== id));
  };

  return (
    <section className="tourlist">
      {tours.map(tour => (
        <Tour key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </section>
  );
};

export default Tourlist;
