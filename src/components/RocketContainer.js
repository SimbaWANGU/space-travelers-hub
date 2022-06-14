/* eslint-disable max-len */
import React from 'react';
import '../styles/rocketContainer.scss';

function RocketContainer() {
  return (
    <div className="rocketContainer">
      <div className="imageContainer">
        <img src="" alt="rocket" />
      </div>
      <div className="rocketDetails">
        <h3 className="rocketName">Falcon 1</h3>
        <p className="rocketDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptatum sapiente eos, repellendus ut minima, officia magni, dolores dignissimos illo nulla rem cumque harum veniam? </p>
        <button type="button" className="rocketButton">Reserve Rocket</button>
      </div>
    </div>
  );
}

export default RocketContainer;
