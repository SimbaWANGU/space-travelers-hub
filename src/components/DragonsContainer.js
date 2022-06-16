import React from 'react';
import PropTypes from 'prop-types';
import { Toaster } from 'react-hot-toast';

function DragonContainer({
  id, name, type, image, description, handleReserve, handleCancel, reserved,
}) {
  return (
    <>
      <div className="rocketContainer">
        <Toaster />
        <div className="imageContainer">
          <img src={image} alt={id} className="image" />
        </div>
        <div className="rocketDetails">
          <h3 className="rocketName">{name}</h3>
          <p className="rocketDescription">
            type:
            {' '}
            {type}
          </p>
          <p>
            {reserved === true && (
            <b className="badgeIcon">Reserved</b>
            )}
            {description}
          </p>
          {!reserved === true && (
            <button type="button" className="reserveRocketocketButton" onClick={handleReserve}>Reserve Dragon</button>
          )}

          {reserved === true && (
            <button type="button" className="cancelReservationButton" onClick={handleCancel}>Cancel Reservation</button>
          )}
        </div>
      </div>
    </>
  );
}

DragonContainer.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleReserve: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default DragonContainer;
