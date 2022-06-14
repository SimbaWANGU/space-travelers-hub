/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { reserveRocket } from '../redux/rockets/rockets';
import '../styles/rocketContainer.scss';

function RocketContainer({
  id,
  name,
  description,
  image,
}) {
  const dispatch = useDispatch();
  const toastDisplay = (message) => {
    toast.success(message, {
      style: {
        border: '1px solid blue',
        padding: '16px',
        color: 'blue',
      },
      iconTheme: {
        primary: 'blue',
        secondary: '#FFFAEE',
      },
    });
  };
  const handleClick = (id, name) => {
    dispatch(reserveRocket(id));
    toastDisplay(`${name} has been Reserved`);
  };
  return (
    <div className="rocketContainer">
      <Toaster />
      <div className="imageContainer">
        <img src={image} alt="rocket" className="image" />
      </div>
      <div className="rocketDetails">
        <h3 className="rocketName">{name}</h3>
        <p className="rocketDescription">{description}</p>
        <button type="button" className="rocketButton" onClick={() => handleClick(id, name)}>Reserve Rocket</button>
      </div>
    </div>
  );
}

export default RocketContainer;
