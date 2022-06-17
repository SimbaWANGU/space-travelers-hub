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
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  handleReserve: PropTypes.func,
  handleCancel: PropTypes.func,
  reserved: PropTypes.bool,
};

DragonContainer.defaultProps = {
  id: '1',
  name: 'Dragon',
  type: 'type',
  image: 'https://image.com',
  description: 'Lorem ipsum dolor sit amet.',
  handleReserve: () => {},
  handleCancel: () => {},
  reserved: false,
};

export default DragonContainer;
