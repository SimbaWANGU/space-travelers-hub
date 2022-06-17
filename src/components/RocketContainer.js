import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { cancelReservation, reserveRocket } from '../redux/rockets/rockets';
import '../styles/rocketContainer.scss';

function RocketContainer({
  id,
  name,
  description,
  image,
  reserved,
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

  const reserveRocketHandler = (id, name) => {
    dispatch(reserveRocket(id));
    toastDisplay(`${name} has been Reserved`);
  };

  const cancelReservationHandler = (id, name) => {
    dispatch(cancelReservation(id));
    toastDisplay(`${name} reservation has been Cancelled`);
  };

  const ReservedBadge = () => <b className="badgeIcon">Reserved</b>;

  return (
    <div className="rocketContainer" data-testid="rocketContainer">
      <Toaster />
      <div className="imageContainer">
        <img src={image} alt="rocket" className="image" />
      </div>
      <div className="rocketDetails">
        <h3 className="rocketName">{name}</h3>
        <p className="rocketDescription">
          {reserved
            ? [<ReservedBadge key={1} />, ' ', description]
            : description}
        </p>
        {reserved
          ? <button type="button" className="cancelReservationButton" onClick={() => cancelReservationHandler(id, name)}>Cancel Reservation</button>
          : <button type="button" className="reserveRocketocketButton" onClick={() => reserveRocketHandler(id, name)}>Reserve Rocket</button>}
      </div>
    </div>
  );
}

RocketContainer.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  reserved: PropTypes.bool,
  image: PropTypes.string,
  description: PropTypes.string,
};

RocketContainer.defaultProps = {
  id: 1,
  name: 'Rocket',
  reserved: false,
  image: 'https://image.com',
  description: 'Lorem ipsum dolor sit amet.',
};

export default RocketContainer;
