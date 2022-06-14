import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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

  return (
    <>
      <RocketContainer />
      <RocketContainer />
      <RocketContainer />
    </>
  );
}

export default Rockets;
