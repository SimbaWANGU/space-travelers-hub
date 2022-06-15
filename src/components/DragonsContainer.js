import React from 'react';
import PropTypes from 'prop-types';

function DragonContainer({
  id, name, type, image, description, handleReserve, handleCancel,
}) {
  return (
    <>
      <div className="rocketContainer">
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
          <p>{description}</p>
          <button type="button" className="rocketButton" onClick={handleReserve}>Reserve Dragon</button>
          { ' ' }
          <button type="button" className="cancel-reserve" onClick={handleCancel}>Cancel Reservation</button>
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
};

export default DragonContainer;
