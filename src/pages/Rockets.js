import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRockets from '../api/rocketApiCall';
import RocketContainer from '../components/RocketContainer';
import { getRockets } from '../redux/rockets/rockets';

function Rockets() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function data() {
      const rockets = await fetchRockets();
      dispatch(getRockets(rockets));
    }
    data();
  }, []);

  const rockets = useSelector((state) => state.rockets);

  return (
    <>
      {rockets.map((rocket) => (
        <RocketContainer
          key={rocket.id}
          name={rocket.rocket_name}
          description={rocket.description}
          image={rocket.flickr_image}
        />
      ))}
    </>
  );
}

export default Rockets;
