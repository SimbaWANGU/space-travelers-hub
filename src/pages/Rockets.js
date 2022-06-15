import React from 'react';
import { useSelector } from 'react-redux';
import RocketContainer from '../components/RocketContainer';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);

  return (
    <>
      {rockets.map((rocket) => (
        <RocketContainer
          key={rocket.id}
          id={rocket.id}
          name={rocket.rocket_name}
          description={rocket.description}
          image={rocket.flickr_image}
          reserved={rocket.reserved}
        />
      ))}
    </>
  );
}

export default Rockets;
