/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import '../styles/rocketContainer.scss';

function RocketContainer({ name, description, image }) {
  return (
    <div className="rocketContainer">
      <div className="imageContainer">
        <img src={image} alt="rocket" className="image" />
      </div>
      <div className="rocketDetails">
        <h3 className="rocketName">{name}</h3>
        <p className="rocketDescription">{description}</p>
        <button type="button" className="rocketButton">Reserve Rocket</button>
      </div>
    </div>
  );
}

export default RocketContainer;
